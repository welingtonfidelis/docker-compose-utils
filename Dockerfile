FROM node:10

WORKDIR /usr/src/docker-file-test

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "start" ]