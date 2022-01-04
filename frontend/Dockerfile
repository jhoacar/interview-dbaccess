FROM node:alpine3.14

USER node

WORKDIR /home/node/app

COPY ./learning/package*.json .

RUN npm install

COPY ./learning .

EXPOSE 3000

CMD npm run build && npm start