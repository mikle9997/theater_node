FROM node:8-alpine

WORKDIR /hyperborea

COPY package.json .

RUN npm install

COPY . .
