FROM node:18.17.0 AS builder

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production

RUN mkdir ./src
COPY ./src ./src
COPY ./tsconfig.json .

RUN npm install typescript@5.1.6 -g
RUN npm run build

FROM node:18.17.0

WORKDIR /app
COPY --from=builder /app/ ./
EXPOSE 3001

CMD node "./dist/index.js"