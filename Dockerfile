FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY package*.json ./
RUN npm ci --no-audit --production
COPY . .
ENV PORT=8050
EXPOSE $PORT
CMD ["npm", "start"]
