FROM node:alpine3.14

USER node

WORKDIR /home/node/app

COPY ./learning /home/node/app

EXPOSE 3000

CMD npm run build && npm start