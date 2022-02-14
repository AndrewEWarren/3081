# ATM Example (NodeJS)

## Pre-requisites
  * [Node JS](https://nodejs.org)
  * Install express and requests:

    ```bash
    npm install express --save
    npm install request --save
    ```

## Running the web server

From the command line start the server with the following command:

  ```bash
  node server.js
  ```

Use Postman, CURL, or other program to call the following functions:

  * GET - [http://127.0.0.1:8081/atm/getBalance](http://127.0.0.1:8081/atm/getBalance)
  * GET - [http://127.0.0.1:8081/atm/getHistory](http://127.0.0.1:8081/atm/getHistory)
  * POST - [http://127.0.0.1:8081/atm/deposit](http://127.0.0.1:8081/atm/deposit)
  * POST - [http://127.0.0.1:8081/atm/withdraw](http://127.0.0.1:8081/atm/withdraw)
