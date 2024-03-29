FROM node:12.18.0-buster-slim
RUN mkdir -p /usr/src
COPY . /usr/src
WORKDIR /usr/src
RUN npm i
EXPOSE 80
CMD ["node","index.js"]
