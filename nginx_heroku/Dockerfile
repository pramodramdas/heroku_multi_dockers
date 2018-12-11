FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
CMD /bin/bash -c "envsubst '\$PORT \$HEROKU_APP_CLIENT_URL \$HEROKU_APP_BACKEND_URL' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'