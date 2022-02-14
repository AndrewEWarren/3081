# specify the node base image with your desired version node:<version>
FROM node:16
# replace this with your application's default port
EXPOSE 8092

RUN mkdir -p /usr/app
WORKDIR /usr/app
RUN npm install express
RUN npm install request

COPY . /usr/app
CMD node /usr/app/caloriesServer.js
