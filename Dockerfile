FROM node:20
WORKDIR /opt/thejoshieman.github.io/
COPY ./ /opt/thejoshieman.github.io/
CMD [ "node","/opt/thejoshieman.github.io/server.js" ]
EXPOSE 8080