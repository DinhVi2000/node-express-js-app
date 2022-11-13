const { Sequelize } = require("sequelize");

module.exports.db = new Sequelize("test", "root", "dinhvi2022", {
  host: "localhost",
  dialect: "mysql",
});
