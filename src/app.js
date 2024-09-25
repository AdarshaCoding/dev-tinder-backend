const express = require("express");
const connectDB = require("./config/database");
const app = express();

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Deepashree",
    lastName: "PK",
    emailId: "deepa@gmail.com",
    password: "deepa@123",
    age: 32,
    geneder: "Male",
  };

  try {
    const user = new User(userObj); // new instance of an model
    await user.save(); // writing data onto data base
  } catch (err) {
    res.status(400).send("Error while saving the user!!! " + err.message);
  }

  res.send("Data added successfully!");
});

// First connect to the database then start listening to the server <--- good practice
connectDB()
  .then(() => {
    console.log("Database connection established!");
    //listen
    app.listen(7777, () => {
      console.log("Server is up and running at 7777");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
