// src/controllers/product.controller.ts
import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import path from "path";

export class ProductController {
  constructor() {}

  async add(req: Request, res: Response): Promise<Response> {
    console.log("ENTRAAAAAAAAA")
    const { name, price, description } = req.body;
    const imagePath = req.file?.path; // Ruta de la imagen

    if (!imagePath) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    const productData = { name, price, description, imagePath };

    try {
      const productService = new ProductService();
      const product = await productService.add(productData);

      if (!product) {
        return res.status(400).json({ message: 'Invalid Product' });
      }

      return res.status(201).json({ message: 'Product created successfully!', product });
    } catch (error) {
      console.error('Error creating product:', error);
      return res.status(500).json({ message: 'An error occurred while creating the product.' });
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

  
  async getAllWithImg(req: Request, res: Response) {
    try {
      const productService = new ProductService();
      const products = await productService.getAll();
  
      // Construir la URL base para la imagen
      const baseUrl = `${req.protocol}://${req.get('host')}`;
  
      // Crear un nuevo array con las URLs de las imágenes generadas
      const productsWithUrls = products.map(product => ({
        ...product,
        imageUrl: product.imagePath 
          ? `${baseUrl}/uploads/products/${path.basename(product.imagePath)}`
          : `${baseUrl}/uploads/products/default-image.png`,
      }));
  
      // Enviar la respuesta con las imágenes y los productos
      return res.status(200).json({ ok: true, products: productsWithUrls });
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
    console.log("ENTRAAAAAAAAAAAAAA: ")
    const { id } = req.params;
    const { name, price, description} = req.body.object;


    try {
      const productService = new ProductService();
      const product = await productService.update(Number(id), { name, price, description});
      console.log(product)

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
