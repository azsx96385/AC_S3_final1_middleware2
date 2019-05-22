const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

//=================================================================
//debug 中介曾 //-2019-5-17 18:51:12 | GET from / | total time: 8ms
app.use((req, res, next) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let reqms = "";
  let resms = "";

  if (req) {
    reqms = date.getMilliseconds();
  }
  if (res) {
    resms = date.getMilliseconds();
  }
  let totalTime = resms - reqms;
  let httpMethod = req.method;
  let url = req.url;
  console.log(
    `${year}-${month}-${day} ${hour}:${min}:${sec} | ${httpMethod} from ${url} | total time: ${totalTime} ms`
  );

  next();
});
//======================================================
// 列出全部 Todo
app.get("/", (req, res) => {
  res.send("列出全部 Todo");
});

// 新增一筆 Todo 頁面
app.get("/new", (req, res) => {
  res.send("新增 Todo 頁面");
});

// 顯示一筆 Todo 的詳細內容
app.get("/:id", (req, res) => {
  res.send("顯示一筆 Todo");
});

// 新增一筆  Todo
app.post("/", (req, res) => {
  res.send("新增一筆  Todo");
});

app.delete("/:id/delete", (req, res) => {
  res.send("刪除 Todo");
});
