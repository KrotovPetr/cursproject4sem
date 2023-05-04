FROM node:16-alpine
WORKDIR /app
COPY package*.json tsconfig.json ./
COPY src ./src
RUN yarn install
EXPOSE 5000
CMD ["yarn", "start"]