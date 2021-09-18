# ecom.micro.service

Ecom.Micro.Service is a project based on microserive architect, which using NodeJs & RabbitMQ.

- _register_service_
- _authen_service_
- _product_service_
- _order_service_


## Features each services
### register_service
- create new user
- get all user

### authen_service
- login and get token to access other services.

### product_service
- create a new product
- find a product by id
- get all
- buy a list of product

### order_service
- show bought product from product_services

## Technology

Ecom.Micro.Service uses a number of open source projects to work properly:
- Visual Studio Code - awesome web-based text editor
- NodeJS - Javascripts framework for backend.
- Express - fast node.js network app framework
- RabbitMQ - the most widely deployed open source message broker
- PostgresQL - The world's most advanced open source relational database

## Installation

Ecom.micro.service requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd to each_service
npm i
node app
```

Install the PostgresQL and start the server.

```sh
import ecom.sql file in the project
```

Install the RabbitMQ and start.

```sh
# for RabbitMQ 3.8,
# 3.8.x support timeline: https://www.rabbitmq.com/versions.html
docker run -it -rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.8-management
```
## License

MIT

**Free Software, Goodluck!**
