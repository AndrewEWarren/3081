# CSCI 3081W Development Environment

## Pre-requisites
  * [Git](https://git-scm.com/)
    * [Windows Instructions](https://positive-stud.medium.com/how-to-download-install-git-for-windows-23ae8c12c5c7) - Enable experimental support for pseudo consoles.

## Docker Pre-requisites
  * Windows 10 Home
    * Install [wsl2 and Ubuntu](https://www.youtube.com/watch?v=ilKQHAFeQR0&list=RDCMUCzLbHrU7U3cUDNQWWAqjceA&start_radio=1&t=7)
  * Install [Docker Desktop](https://hub.docker.com/?overlay=onboarding) from [Docker Hub](https://hub.docker.com/)
  * Linux
    * Use [docker group instead of sudo](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)

## Getting Started with Docker

On Windows use the "Git Bash" terminal.  At the base of the examples directory, run the following scripts:

1. Build docker image

    ```bash
    bin/build-env.sh
    ```

2. Run docker image

    ```bash
    #Usage bin/run-env.sh <port - optional(default 8081)>
    bin/run-env.sh
    ```

3. Try to compile and run a c++ program:

    ```bash
    cd lectures/04-docker/cpp_example
    g++ main.cc -o hello
    ./hello
    ```
