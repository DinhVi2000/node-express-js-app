const express = require("express");
const productController = require("../controller/product/product-controller");

const productRouter = express.Router();

productRouter.post("/", productController.save);
productRouter.get("/", productController.getAll);
productRouter.get("/titleIs", productController.getProductByCondition);
// productRouter.get("/title/:title", productController.getOrCreateByTitle);
// productRouter.get("/:productId", productController.getById);
productRouter.put("/:productId", productController.updateById);
productRouter.delete("/:productId", productController.deleteById);

module.exports.productRouter = productRouter;
