import Product from "../model/product.model";

export class ProductService {
  constructor() {}

  // Crear un producto
  async add(productData: { name: string; price: number; description: string; imagePath?: string }) {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Error creating product");
    }
  }

  // Obtener todos los productos
  async getAll() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      console.error("Error retrieving products:", error);
      throw new Error("Error retrieving products");
    }
  }

  // Obtener un producto por ID
  async getById(id: number) {
    try {
      const product = await Product.findByPk(id);
      return product;
    } catch (error) {
      console.error("Error retrieving product:", error);
      throw new Error("Error retrieving product");
    }
  }

  // Actualizar un producto por ID
  async update(id: number, productData: { name: string; price: number; description: string; imagePath?: string }) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return null;
      }

      await product.update(productData);
      return product;
    } catch (error) {
      console.error("Error updating product:", error);
      throw new Error("Error updating product");
    }
  }

  // Eliminar un producto por ID
  async delete(id: number) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return null;
      }

      await product.destroy();
      return true;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw new Error("Error deleting product");
    }
  }
}
