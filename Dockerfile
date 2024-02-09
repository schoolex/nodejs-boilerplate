FROM node:18-alpine
COPY . .
RUN yarn build
CMD [ "yarn", "start" ]