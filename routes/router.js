const express = require("express");

const routes = express.Router();

routes.use("/web", require("./web").webRouter);
routes.use("/product", require("./product").productRouter);
routes.use("/admin", require("./admin").adminRouter);

module.exports.routes = routes;

// export default routes;
