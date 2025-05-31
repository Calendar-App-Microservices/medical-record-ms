FROM node:23-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 3000
