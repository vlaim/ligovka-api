FROM node:14-alpine

RUN apk update && apk --no-cache add dumb-init

WORKDIR /home/node/app

COPY package.json ./

RUN npm install

COPY . .

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD node /home/node/app/index.js