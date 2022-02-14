# ATM Example (Python / Flask)

## Pre-requisites
  * [Python](https://www.python.org/)
  * Install flask:

    ```bash
    pip install --no-cache-dir -r requirements.txt
    ```

## Running the web server

From the command line start the server with the following command:

  ```bash
  python server.py
  ```

Use Postman, CURL, or other program to call the following functions:

  * GET - [http://127.0.0.1:8081/atm/getBalance](http://127.0.0.1:8081/atm/getBalance)
  * GET - [http://127.0.0.1:8081/atm/getHistory](http://127.0.0.1:8081/atm/getHistory)
  * POST - [http://127.0.0.1:8081/atm/deposit](http://127.0.0.1:8081/atm/deposit)
  * POST - [http://127.0.0.1:8081/atm/withdraw](http://127.0.0.1:8081/atm/withdraw)

## Running via Docker

  1. Build the image:

    ```bash
    docker build -t my-atm .
    ```

  2. Run the image:

    ```bash
    docker run -p 127.0.0.1:8081:8081 -it my-atm
    ```
