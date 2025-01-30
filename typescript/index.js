import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.sendFile("/home/hrushikesh/cohort/assignments/typescript/index.html");
});

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
});

app.listen(3000);
