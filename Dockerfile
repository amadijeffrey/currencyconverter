FROM node:17-alpine as builder
WORKDIR  /app
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .
RUN npm run build


FROM nginx:1.21.6-alpine 
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/build .
EXPOSE 80
CMD ["nginx","-g", "daemon off;"]
