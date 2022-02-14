# Calorie Counter

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
  node caloriesServer.js
  ```

Use Postman, CURL, or other program to call the following functions:

  * GET - http://127.0.0.1:8092/calories/getCurrentCalories
       * This returns the total number of calories eaten today.
       * No JSON is required.
  * GET - http://127.0.0.1:8092/calories/getChanges
       * This returns the food is eaten today, workouts, and calorie change.
       * No JSON is required.
  * POST - http://127.0.0.1:8092/calories/caloriesGained
       * This adds a food item and a number of calories.
       * Use this JSON formate to name the food and give the amount of calories to add to the total calories.
  ```
  {
    "name" : "Salad",
    "amount": 250.0
  }
  ```
  * POST - http://127.0.0.1:8092/calories/caloriesBurned
       * Use this JSON formate to name the food and give the amount of calories to add to the total calories.
  ```
  {
    "name" : "Sit-Ups",
    "amount": 50.0
  }
  ```
  * POST - http://127.0.0.1:8092//calories/caloriesCleared
       * Resets calories to zero, food and workouts are cleared and ready for the next day.

## Running via Docker

  1. Build the image:

    ```bash
    docker build -t calories .
    ```

  2. Run the image:

    ```bash
    docker run -p 127.0.0.1:8081:8081 -it calories
    ```
