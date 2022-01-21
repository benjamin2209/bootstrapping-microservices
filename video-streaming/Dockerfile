FROM node:16

WORKDIR /app

COPY package*.json ./

#RUN npm install --only=production
RUN npm install
#RUN npm install -g nodemon
RUN apt update
#RUN apt install -qy vim

COPY ./ ./

EXPOSE 8082

CMD [ "npm", "start" ]