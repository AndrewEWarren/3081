FROM ubuntu:18.04

RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    cmake \
    libssl-dev \
    zlib1g-dev

RUN mkdir -p /app

RUN git clone https://github.com/dtorban/CppWebServer.git /app/CppWebServer

RUN mkdir -p /app/CppWebServer/build
WORKDIR /app/CppWebServer/build
RUN cmake ..
RUN make
WORKDIR /app/CppWebServer/example

EXPOSE 8081
