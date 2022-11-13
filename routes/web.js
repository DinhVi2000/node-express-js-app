const express = require("express");

const webController = require("../controller/web/web-controller");

const webRouter = express.Router();

webRouter.get("/", (req, res) => {
  res.send("hello web");
});

webRouter.get("/user/*", (req, res) => {
  res.send("hello web user *");
});

webRouter.get("/:name/:age([0-9]{1,2})", (req, res) => {
  res.send(req.params);
});

webRouter.get(
  "/multi-func",
  webController.func1,
  webController.func2,
  webController.control
);

webRouter.post("/login", (req, res) => {
  console.log(req.body);
  console.log(req.baseUrl);
  //   req.on("data", function (chunk) {
  //     console.log("chunk", chunk);
  //   });
  res.send("hello web");
});

webRouter.get("/response", (req, res) => {
  //   res.send({ name: "vi nguyen" });
  //   res.status(202);
  res.redirect("/api/web");
});

module.exports.webRouter = webRouter;
