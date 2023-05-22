/*
    날짜 : 2023-05-22
    이름 : 박진휘
    내용 : Node.js 실습
*/

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //res.write("Hello Node.js");
  //res.end();

  const path = url.parse("req.url, true").pathname;

  if (path == "/") {
    res.end("Hello World.js");
  }

  if (path == "/hello") {
    res.end("Hello Node.js");
  }

  if (path == "/welcome") {
    res.end("Welcome Node.js");
  }

  if (path == "/greeting") {
    res.end("Greeting Node.js");
  }
});

server.listen(3000, () => {
  console.log("app 실행");
});

//터미널 실행 > node app.js
//웹 > localhost:3000
