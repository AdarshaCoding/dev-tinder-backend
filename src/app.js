const express = require("express");
const app = express();

//middlewares
const { adminAuth, userAuth } = require("./middlewares/auth");
app.use("/admin", adminAuth);
// app.use("/user", userAuth);

app.get("/admin/getAllUsers", (req, res) => {
  res.send("All users data!");
});

app.post("/admin/addUser", (req, res) => {
  res.send("One user is added!");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User is authorized");
});

//listen
app.listen(4000, () => {
  console.log("Server is up and running at 4000");
});
