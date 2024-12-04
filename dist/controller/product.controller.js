"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../services/product.service");
const path_1 = __importDefault(require("path"));
class ProductController {
    constructor() { }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            console.log("ENTRAAAAAAAAA");
            const { name, price, description } = req.body;
            const imagePath = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path; // Ruta de la imagen
            if (!imagePath) {
                return res.status(400).json({ message: 'Image file is required' });
            }
            const productData = { name, price, description, imagePath };
            try {
                const productService = new product_service_1.ProductService();
                const product = yield productService.add(productData);
                if (!product) {
                    return res.status(400).json({ message: 'Invalid Product' });
                }
                return res.status(201).json({ message: 'Product created successfully!', product });
            }
            catch (error) {
                console.error('Error creating product:', error);
                return res.status(500).json({ message: 'An error occurred while creating the product.' });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productService = new product_service_1.ProductService();
                const products = yield productService.getAll();
                return res.status(200).json({ ok: true, products });
            }
            catch (error) {
                console.error("Error retrieving products:", error);
                return res.status(500).json({ message: "An error occurred while retrieving products." });
            }
        });
    }
    getAllWithImg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productService = new product_service_1.ProductService();
                const products = yield productService.getAll();
                // Construir la URL base para la imagen
                const baseUrl = `${req.protocol}://${req.get('host')}`;
                // Crear un nuevo array con las URLs de las imágenes generadas
                const productsWithUrls = products.map(product => (Object.assign(Object.assign({}, product), { imageUrl: product.imagePath
                        ? `${baseUrl}/uploads/products/${path_1.default.basename(product.imagePath)}`
                        : `${baseUrl}/uploads/products/default-image.png` })));
                // Enviar la respuesta con las imágenes y los productos
                return res.status(200).json({ ok: true, products: productsWithUrls });
            }
            catch (error) {
                console.error("Error retrieving products:", error);
                return res.status(500).json({ message: "An error occurred while retrieving products." });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const productService = new product_service_1.ProductService();
                const product = yield productService.getById(Number(id));
                if (!product) {
                    return res.status(404).json({ msg: "Product not found" });
                }
                return res.status(200).json({ ok: true, product });
            }
            catch (error) {
                console.error("Error retrieving product:", error);
                return res.status(500).json({ message: "An error occurred while retrieving the product." });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("ENTRAAAAAAAAAAAAAA: ");
            const { id } = req.params;
            const { name, price, description } = req.body.object;
            try {
                const productService = new product_service_1.ProductService();
                const product = yield productService.update(Number(id), { name, price, description });
                console.log(product);
                if (!product) {
                    return res.status(404).json({ msg: "Product not found" });
                }
                return res.status(200).json({ message: "Product updated successfully!" });
            }
            catch (error) {
                console.error("Error updating product:", error);
                return res.status(500).json({ message: "An error occurred while updating the product." });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const productService = new product_service_1.ProductService();
                const result = yield productService.delete(Number(id));
                if (!result) {
                    return res.status(404).json({ msg: "Product not found" });
                }
                return res.status(200).json({ message: "Product deleted successfully!" });
            }
            catch (error) {
                console.error("Error deleting product:", error);
                return res.status(500).json({ message: "An error occurred while deleting the product." });
            }
        });
    }
}
exports.ProductController = ProductController;
