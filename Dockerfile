FROM nginx:1.17.3-alpine
COPY /dist/axis-final-front/ /usr/share/nginx/html/