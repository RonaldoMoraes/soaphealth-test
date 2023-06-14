FROM node:19.8.1

WORKDIR /usr/src/app

COPY package*.json ./
# COPY package*.json tsconfig.json ./

RUN npm install

# COPY . .
# RUN npm run build

COPY dist /usr/src/app/dist

COPY prisma/*.prisma /usr/src/app/prisma/

# RUN npx tsc
RUN npx prisma generate

EXPOSE 3001

CMD [ "node", "dist/server.js" ]
