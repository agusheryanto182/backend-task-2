FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

EXPOSE 3000

CMD ["npm", "start"]