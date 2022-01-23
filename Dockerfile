FROM node:16.13.1 as node
WORKDIR /usr/src/app
COPY . ./
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=node /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
