FROM node:16-alpine3.15

WORKDIR /usr/app

COPY . .

RUN yarn

CMD [ "yarn", "dev" ]