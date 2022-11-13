module.exports.func1 = (req, res, next) => {
  console.log("func1");
  next();
};

module.exports.func2 = (req, res, next) => {
  console.log("func2");
  next();
};

module.exports.control = (req, res, next) => {
  res.send("web ok");
};


