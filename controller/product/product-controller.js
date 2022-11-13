const { Op, fn } = require("sequelize");
const model = require("../../models/product");

module.exports.save = async (req, res, next) => {
  const { title, price, desc } = req.body;
  //   const saveProduct = model.product.build({
  //     title,
  //     price,
  //     desc,
  //   });
  try {
    await model.product.create({
      title,
      price,
      desc,
    });
    res.send("save product successfull");
  } catch (e) {
    next(e);
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    let allProduct = await model.product.findAll();
    console.log("all product", allProduct);
    res.json(allProduct);
  } catch (e) {
    next(e);
  }
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.productId;
  try {
    const product = await model.product.findByPk(id, {
      attributes: ["title", "desc"],
    });
    if (product) {
      res.send(product);
    }
    res.send("product id is not found!");
  } catch (e) {
    next(e);
  }
};

module.exports.updateById = async (req, res, next) => {
  try {
    const { title, price, desc } = req.body;
    const newProduct = await model.product.update(
      {
        title,
        price,
        desc,
      },
      {
        where: {
          id: req.params.productId,
        },
      }
    );
    if (newProduct === 1) {
      res.send("update successful!!!");
    }
    res.send("product id is not found!");
    // res.redirect("/api/product");
  } catch (e) {
    next(e);
  }
};

module.exports.deleteById = async (req, res, next) => {
  try {
    const productRemove = await model.product.destroy({
      where: {
        id: req.params.productId,
      },
    });
    console.log("productRemove", productRemove);
    if (productRemove === 1) {
      res.send("delete successful!");
    }
    res.send("product id is not found!");
  } catch (e) {
    next(e);
  }
};

module.exports.getOrCreateByTitle = async (req, res, next) => {
  const { title } = req.params;
  try {
    const product = await model.product.findOrCreate({
      where: { title },
      attributes: ["desc", "price"],
    });
    console.log("product :", product);
    res.send(product[0]);
  } catch (e) {
    next(e);
  }
};


module.exports.getProductByCondition=async(req, res, next) =>{
  try {
    const product = await model.product.count()
    //   {
    //   where:{
    //    id:1
    //   }
    //   // ,attributes:[fn("COUNT", "id"), "id"]
    // }
    console.log("count", product);
    
    res.json(product)
  } catch (e) {
    next(e)
  }
 
}