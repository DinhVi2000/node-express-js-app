const Sequelize = require("sequelize");

const database = require("./database");

module.exports.product = database.db.define(
  "product",
  {
    title: Sequelize.STRING,
    desc: Sequelize.TEXT,
    price: Sequelize.BIGINT,
  },
  { tableName: "product" }
);
