const Sequelize = require("sequelize");

const database = require("./database")

module.exports.type = database.db.define(
  "type",
  {
    name: Sequelize.STRING,
    desc: Sequelize.TEXT,
  },
  { tableName: "type" }
);