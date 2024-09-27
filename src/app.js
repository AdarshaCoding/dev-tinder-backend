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

app.get("/user", async (req, res) => {
  try {
    console.log(req.body);
    const userEmail = req.body.emailId;
    // const users = await User.find({ emailId: "adarsha@gmail.com" });
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User Not Found!");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong!" + err.message);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.send("No users found!");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong!" + err.message);
  }
});

app.delete("/user", async (req, res) => {
  try {
    const id = req.body.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).send("User Not Found!");
    } else {
      res.send("User deleted successfully!");
    }
  } catch (err) {
    res.status(400).send("Something went wrong!" + err.message);
  }
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
