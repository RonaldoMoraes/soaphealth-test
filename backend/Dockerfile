FROM node:19.8.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

COPY prisma/*.prisma /usr/src/app/prisma/

RUN npx prisma generate

EXPOSE 3001

CMD [ "node", "dist/server.js" ]
