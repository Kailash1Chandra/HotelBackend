# server/Dockerfile
FROM node:18

WORKDIR /app

# copy package files first for better caching
COPY package*.json ./

RUN npm install

# copy rest of the backend source
COPY . .

# expose the port your app listens on
EXPOSE 3000

# start command (ensure package.json has "start": "node server.js")
CMD ["npm", "start"]
