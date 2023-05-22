### STAGE 1: Build Angular App ###
FROM node:14.20-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run with Nginx ###
FROM nginx:1.17.1-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/app-ui /usr/share/nginx/html
EXPOSE 80
