FROM node:16

WORKDIR /app

COPY package*.json ./

#RUN npm install --only=production
RUN npm install

RUN npm install -g nodemon
RUN apt update
#RUN apt install -qy vim

COPY ./src ./src

EXPOSE 8081

#CMD [ "npm", "start" ]
CMD [ "nodemon", "index.js" ]