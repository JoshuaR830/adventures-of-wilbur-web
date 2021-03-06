FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]