# Api-Prueba-Guia

This project is a Node.js-based RESTful API that uses Sequelize as the ORM to interact with a MySQL database. I take the liberty to add a profile sistem more of the requirements the passwords are encrypt and I use JWT Token for the security of the backend, OK Well lets begin.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Migrations](#database-migrations)
- [Database Seeders](#database-seeders)
- [Running the API](#running-the-api)
- [Installation of Frontend](#installation-frontend)


## Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/) 
- [MySQL](https://www.mysql.com/) (v8 or higher)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/crosit/Api-Prueba-Guia.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. I know it's not good left the `.env` file in the root of the project but, just because it's a prove I let it here just modifie whit you data:


    Example `.env`:

    ```env
    PORT = 3000
    CORS = 'http://localhost:8080'
    
    DB_HOST = 'localhost'
    DB_USER = 'root'
    DB_PASSWORD = '123456'
    DB_NAME = 'prueba'
    
    SECRET_KEY = '{!1@2#3$4%5^6&7*8(9)0}'
    ```

## Configuration

Configure the Sequelize database settings to migrations and seeders in `app\config\config.json`:

```json
{
  "development": {
    "username": "root",
    "password": "123456",
    "database": "prueba",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false 
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
4. Create Database (remember you need to create a empty db)
 ```bash
    npx sequelize-cli db:migrate
  ```
5. Create Example Data Into DB

```bash
    npx sequelize-cli db:seed:all
  ```
5. lets try if everything it's ok, Running the API
```bash
    npm run dev
  ```
6.  Clone the front repository:

    ```bash
    git clone https://github.com/crosit/Front-prueba-guia.git
    ```
7. Install front dependencies:

    ```bash
    npm install
    ```
8. lets try if everything it's ok, Running the Front
```bash
    npm run start
  ```
## Notes

1. Remember if you made a client profile you will have less permissions and I left the buttons visibles for you can see the permisions if you have admin profile you can make everything.
2. After you run seeders you have this users created
   2.1 users
   user: admin@example.com
   password: admin
   role: admin
but you can create yours in the button register From

Thank you very much and I'm in touch




