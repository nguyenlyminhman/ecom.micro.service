const amqp = require('amqplib'); 




const connectAmqp = async () => {
    let connection, chanel;
    const amqpserver = 'amqp://localhost:5672'
    connection = await amqp.connect(amqpserver);
    chanel = await connection.createChannel();
    return chanel;
}

module.exports = {
    connectAmqp
}