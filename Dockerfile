FROM node:latest

LABEL version="1.0" maintainer="Bolin Clement" email="clement.bolin@epitech.eu"

WORKDIR /app

COPY . /app

RUN npm install --save
RUN npm run build
RUN echo -e "paris,fr\n°C" | ./bin/weatherCLI

# PORT
CMD [ "echo -e \"paris,fr\n°C\" | ./bin/weatherCLI && ./bin/weatherCLI -t" ]
EXPOSE 8888