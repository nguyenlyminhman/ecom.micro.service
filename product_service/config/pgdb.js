
/*
* This file using for connection string
*/
let pgdb = {
    pg: {
       user: 'postgres',
       host: 'localhost',
       database: 'postgres',
       password: 'sa@',
       port: 5432,
       max: 20,
       idleTimeoutMillis: 30000,
       connectionTimeoutMillis: 2000,
    }
 };

 module.exports = pgdb;