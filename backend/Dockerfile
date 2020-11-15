FROM node:alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install

COPY ./ ./
# dev설정은 nodemon을 실행하여 실시간 수정파일을 확인하기 위해
CMD ["npm","run","start"]