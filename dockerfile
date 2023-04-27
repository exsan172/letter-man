FROM --platform=amd64 node:16
WORKDIR /letter-man

COPY package*.json ./letter-man/
COPY . /letter-man/
EXPOSE 3000

ENV PORT=3000
ENV ALLOW_CORS=*
ENV DB_HOST=mongodb://mongoDB-arsip-surat-elektronik:27018
ENV DB_NAME=letter
ENV SECRET_KEY=M1r34cl3
ENV CLOUD_NAME=exsan-dev
ENV API_KEY=748976324489119
ENV API_SECRET=uBAic3y44QImWkbUTJwExujFhmU
ENV FOLDER_NAME=letter-man

RUN npm install
CMD ["npm", "start"]