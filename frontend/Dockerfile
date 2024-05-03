FROM nginx

COPY ./build /usr/share/nginx/html/weather-app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# FROM node:14
# COPY ./build /usr/src/weather-app
# EXPOSE 3000
# CMD ["npm", "start"]