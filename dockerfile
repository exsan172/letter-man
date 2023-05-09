FROM --platform=amd64 node:16
WORKDIR /letter-man

COPY package*.json ./letter-man/
COPY . /letter-man/
EXPOSE 3000

ENV PORT=3000
ENV ALLOW_CORS=*
ENV DB_HOST=mongodb://arsipSuratElektronik:jLEaeYqTGMhW5P5z@ac-0wzi16u-shard-00-00.lo5r1wt.mongodb.net:27017,ac-0wzi16u-shard-00-01.lo5r1wt.mongodb.net:27017,ac-0wzi16u-shard-00-02.lo5r1wt.mongodb.net:27017/?ssl=true&replicaSet=atlas-exmrwi-shard-0&authSource=admin&retryWrites=true&w=majority
ENV DB_NAME=letter
ENV SECRET_KEY=M1r34cl3
ENV CLOUD_NAME=exsan-dev
ENV API_KEY=748976324489119
ENV API_SECRET=uBAic3y44QImWkbUTJwExujFhmU
ENV FOLDER_NAME=letter-man

RUN npm install
CMD ["npm", "start"]
