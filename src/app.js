const express = require("express");

const app = express();

//Get the user data from DB

const user = {
  firstName: "Adarsha",
  lastName: "PC",
};

//request handlers
// app.use("/user", (req, res) => {
//   res.send(user);
// });

app.get("/user/:id/:name", (req, res) => {
  console.log(req.params);
  res.send(user);
});

app.post("/user", (req, res) => {
  //update the DB with data
  // res.send("Data updated succefully!");
  res.status(200).send(req.query);
});

app.use("/test", (req, res) => {
  res.send("Testing Page!");
});

//listen
app.listen(4000, () => {
  console.log("Server is up and running at 4000");
});
