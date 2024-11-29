// src/controllers/product.controller.ts
import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  constructor() {}

  async add(req: Request, res: Response) {
    const { name, price, description, imagePath } = req.body;

    const object = { name, price, description, imagePath };

    try {
      const productService = new ProductService();
      const product = await productService.add(object);

      if (!product) {
        return res.status(400).json({ msg: "Invalid Product" });
      }

      return res.status(201).json({ message: "Product created successfully!" });
    } catch (error) {
      console.error("Error creating product:", error);
      return res.status(500).json({ message: "An error occurred while creating the product." });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const productService = new ProductService();
      const products = await productService.getAll();

      return res.status(200).json({ ok: true, products });
    } catch (error) {
      console.error("Error retrieving products:", error);
      return res.status(500).json({ message: "An error occurred while retrieving products." });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const productService = new ProductService();
      const product = await productService.getById(Number(id));

      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }

      return res.status(200).json({ ok: true, product });
    } catch (error) {
      console.error("Error retrieving product:", error);
      return res.status(500).json({ message: "An error occurred while retrieving the product." });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, price, description, imagePath } = req.body;

    try {
      const productService = new ProductService();
      const product = await productService.update(Number(id), { name, price, description, imagePath });

      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }

      return res.status(200).json({ message: "Product updated successfully!" });
    } catch (error) {
      console.error("Error updating product:", error);
      return res.status(500).json({ message: "An error occurred while updating the product." });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const productService = new ProductService();
      const result = await productService.delete(Number(id));

      if (!result) {
        return res.status(404).json({ msg: "Product not found" });
      }

      return res.status(200).json({ message: "Product deleted successfully!" });
    } catch (error) {
      console.error("Error deleting product:", error);
      return res.status(500).json({ message: "An error occurred while deleting the product." });
    }
  }
}
