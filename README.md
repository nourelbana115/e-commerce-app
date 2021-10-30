## Description
Node.js simple microservice app running behind Nginx as reverse proxy and all services expose same port and Nginx service Discovry manages redirection to approbriate service based on locations with validation and pagination middlewares using Sequelize ORM and Express framework as a proof of concept.
### Prerequisites  
  
-  Node v12 LTS
-  MYSQL
-  Postman
  ### Languages, libraries and tools used
-   [Node.js](https://nodejs.org/en/)
-   [Sequelize ORM](https://sequelize.org/)
-   [Docker](https://www.docker.com/)
-   [Swagger API](https://swagger.io/)

## Running the app
- please update your ~/.profile with env variables or pass it to docker compose file at Deployment directory with your database credentials and database name should be the same with the one in the sql script
- please find DDL script at './Deployment/ecommercStructreData.sql'
- docker compose populate databse with data by ecommercStructreData.sql
- by default docker compose will run in development mode and credentials passed to it from config
- i have attached postman collection for APIs
- move to Deployment Directory
```bash
# build docker image for the ap
$ docker pull mysql:latest
$ docker-compose up

# development mode
$ npm install
$ npm start
```
- visit [users Api Docs](http://localhost:8080/users/api-docs/) to find users Api Docs.
- visit [products Api Docs](http://localhost:8080/products/api-docs/) to find Products Api Docs.
- visit [orders Api Docs](http://localhost:8080/orders/api-docs/) to find orders Api Docs.
