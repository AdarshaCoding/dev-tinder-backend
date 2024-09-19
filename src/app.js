const express = require("express");

const app = express();

// app.use("/user", rH1, rH2, [rH3, rH4], rH5, rH6)
// we can wrap route Handlers in array, it works in the same way
app.use(
  "/user",
  (req, res, next) => {
    console.log("First Request Handler");
    //res.send("Route Handler Function 1");
    next();
  },
  (req, res, next) => {
    console.log("2nd Request Handler");
    //res.send("2nd Route Handler");
    next();
  },
  (req, res, next) => {
    console.log("3rd Request Handler");
    //res.send("3rd Route Handler");
    next();
  },
  (req, res, next) => {
    console.log("4th Request Handler");
    // res.send("4th Route Handler");
    next(); // express will expect one more route handler here which sends the response back
  },
  (req, res) => {
    console.log("5th Request Handler");
    res.send("5th Response!");
  }
);

/**
 * We should not res.send two times within nested or within the same request handler,
 * it cannot handle because TCP connection must have close after receiving the first response
 * we can add n number of route handler
 */

//listen
app.listen(4000, () => {
  console.log("Server is up and running at 4000");
});
