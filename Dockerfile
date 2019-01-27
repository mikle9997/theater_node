FROM node:0.12

WORKDIR /hyperborea

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
