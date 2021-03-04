FROM node:alpine

ADD dist /app
ADD package.json /app
ADD package-lock.json /app

WORKDIR /app

RUN npm install

EXPOSE 8081

CMD ["node", "main.js"]