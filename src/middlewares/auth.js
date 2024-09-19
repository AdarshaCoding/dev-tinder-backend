const adminAuth = (req, res, next) => {
  console.log("Checking Admin Authorization");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Not authorized!");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("Checking Admin Authorization");
  const token = "xyz";
  const isUserAuthorized = token === "xyz";
  if (!isUserAuthorized) {
    res.status(401).send("Not authorized!");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
