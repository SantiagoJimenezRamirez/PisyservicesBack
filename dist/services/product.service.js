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
exports.ProductService = void 0;
const product_model_1 = __importDefault(require("../model/product.model"));
class ProductService {
    constructor() { }
    // Crear un producto
    add(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_model_1.default.create(productData);
                return product;
            }
            catch (error) {
                console.error("Error creating product:", error);
                throw new Error("Error creating product");
            }
        });
    }
    // Obtener todos los productos
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_model_1.default.findAll();
                return products;
            }
            catch (error) {
                console.error("Error retrieving products:", error);
                throw new Error("Error retrieving products");
            }
        });
    }
    // Obtener un producto por ID
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_model_1.default.findByPk(id);
                return product;
            }
            catch (error) {
                console.error("Error retrieving product:", error);
                throw new Error("Error retrieving product");
            }
        });
    }
    // Actualizar un producto por ID
    update(id, productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_model_1.default.findByPk(id);
                if (!product) {
                    return null;
                }
                yield product.update(productData);
                return product;
            }
            catch (error) {
                console.error("Error updating product:", error);
                throw new Error("Error updating product");
            }
        });
    }
    // Eliminar un producto por ID
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_model_1.default.findByPk(id);
                if (!product) {
                    return null;
                }
                yield product.destroy();
                return true;
            }
            catch (error) {
                console.error("Error deleting product:", error);
                throw new Error("Error deleting product");
            }
        });
    }
}
exports.ProductService = ProductService;
