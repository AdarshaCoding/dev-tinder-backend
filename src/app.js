const express = require("express");

const app = express();

// Authorization is duplicated

app.get("/admin/getAllUsers", (req, res) => {
  const token = "xyzz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Not authorized!");
  } else {
    res.send("All users data!");
  }
});

app.post("/admin/addUser", (req, res) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Not authorized!");
  } else {
    res.send("One user is added!");
  }
});

//listen
app.listen(4000, () => {
  console.log("Server is up and running at 4000");
});
