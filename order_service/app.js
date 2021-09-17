var express = require('express');
const amqp = require('amqplib'); 

var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
let connection, chanel;

async function connectAmqp () {
    
    let amqpserver = 'amqp://localhost:5672'
    connection = await amqp.connect(amqpserver);
    chanel = await connection.createChannel();
    await chanel.assertQueue('ORDER_QUEUE');
}

connectAmqp().then( ()=>{
    chanel.consume('ORDER_QUEUE', (data)=>{
      console.log(JSON.parse(data.content));  
    })
    
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
