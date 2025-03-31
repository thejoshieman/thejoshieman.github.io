FROM node:20
WORKDIR /opt/thejoshieman.com/
COPY ./ /opt/thejoshieman.com/
CMD [ "node","/opt/thejoshieman.com/server.js" ]
EXPOSE 8080