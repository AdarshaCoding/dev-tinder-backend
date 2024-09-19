const express = require("express");

const app = express();

//middleware
app.use("/admin", (req, res, next) => {
  const token = "xy1z";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Not authorized!");
  } else {
    next();
  }
});

app.get("/user", (req, res) => {
  res.send("User data!");
});

app.get("/admin/getAllUsers", (req, res) => {
  res.send("All users data!");
});

app.post("/admin/addUser", (req, res) => {
  res.send("One user is added!");
});

//listen
app.listen(4000, () => {
  console.log("Server is up and running at 4000");
});
