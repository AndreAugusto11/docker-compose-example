FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i

CMD [ "node", "server.js" ]
