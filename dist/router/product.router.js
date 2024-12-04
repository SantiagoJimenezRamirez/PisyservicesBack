"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/product.routes.ts
const express_1 = require("express");
const product_controller_1 = require("../controller/product.controller");
const config_img_1 = require("../server/config.img");
const routerProduct = (0, express_1.Router)();
const productController = new product_controller_1.ProductController();
routerProduct.post('/', config_img_1.upload.single('file'), productController.add);
routerProduct.get("/", productController.getAll);
routerProduct.get("/getAll", productController.getAllWithImg);
routerProduct.get("/:id", productController.getById);
routerProduct.put("/:id", productController.update);
routerProduct.delete("/:id", productController.delete);
exports.default = routerProduct;
