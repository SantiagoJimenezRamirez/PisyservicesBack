// src/routes/product.routes.ts
import { Router } from "express";
import { ProductController } from "../controller/product.controller";

const routerProduct = Router();
const productController = new ProductController();

routerProduct.post("/",  productController.add);
routerProduct.get("/",  productController.getAll);
routerProduct.get("/:id",  productController.getById);
routerProduct.put("/:id",  productController.update);
routerProduct.delete("/:id",  productController.delete);

export default routerProduct;
