const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const Product = require("./models/product");
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Product.product.sync({ force: true });

// prefix admin
app.use("/api", require("./routes/router").routes);
// require("./routes/router")(app);

app.listen(PORT, (req, res) => {
  console.log("connect");
});
