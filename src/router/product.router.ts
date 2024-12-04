// src/routes/product.routes.ts
import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { upload } from "../server/config.img";

const routerProduct = Router();
const productController = new ProductController();

routerProduct.post('/', upload.single('file'), productController.add);
routerProduct.get("/",  productController.getAll);
routerProduct.get("/getAll",  productController.getAllWithImg);
routerProduct.get("/:id",  productController.getById);
routerProduct.put("/:id",  productController.update);
routerProduct.delete("/:id",  productController.delete);

export default routerProduct;
