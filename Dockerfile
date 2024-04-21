FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY token.js .
EXPOSE 3000
CMD ["node", "token.js"]