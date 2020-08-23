# Stage 1 - build process react
FROM node:lts-alpine as builder
WORKDIR /app
# RUN apk add git 
COPY package.json /app
RUN npm i
COPY . ./
RUN npm run build

# Stage 2 - set envWeb nginx
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]