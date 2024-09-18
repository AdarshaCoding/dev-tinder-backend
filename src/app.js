const express = require("express");

const app = express();

//request handlers

app.use("/test/api", (req, res) => {
  res.send("Testing Page - api!");
});

app.use("/test", (req, res) => {
  res.send("Testing Page!");
});
app.use("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use("/", (req, res) => {
  res.send("Home Page!");
});

//listen
app.listen(4000, () => {
  console.log("Server is up and running at 4000");
});
