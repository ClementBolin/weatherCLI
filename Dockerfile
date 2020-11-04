FROM node:latest

LABEL version="1.0" maintainer="Bolin Clement" email="clement.bolin@epitech.eu"

WORKDIR /app

COPY . /app

# RUN npm install --save
# RUN npm start

# PORT
EXPOSE 8888
