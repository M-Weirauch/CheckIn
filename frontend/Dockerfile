### STAGE 1: Build ###
FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app
RUN npm run-script build


### STAGE 2: Setup ###

FROM nginx:1.14.1-alpine

COPY nginx.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*
COPY /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
