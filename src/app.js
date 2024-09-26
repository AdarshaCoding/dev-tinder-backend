const express = require("express");
const connectDB = require("./config/database");
const app = express();

const User = require("./models/user");

//app.use(() => {});  //this will execute for all the routes, similarly used below
app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const userObj = req.body;
  try {
    const user = new User(userObj); // new instance of an model
    await user.save(); // writing data onto data base
  } catch (err) {
    res.status(400).send("Error while saving the user!!! " + err.message);
  }

  res.send("Data added successfully!\n" + JSON.stringify(userObj));
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
