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
exports.CategoryService = void 0;
const category_model_1 = __importDefault(require("../model/category.model"));
class CategoryService {
    constructor() { }
    // Crea una nueva categoría
    add(categoryData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield category_model_1.default.create(categoryData);
                return category;
            }
            catch (error) {
                console.error("Error creating category:", error);
                throw new Error("Error creating category");
            }
        });
    }
    // Obtiene todas las categorías
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield category_model_1.default.findAll();
                return categories;
            }
            catch (error) {
                console.error("Error retrieving categories:", error);
                throw new Error("Error retrieving categories");
            }
        });
    }
    // Obtiene una categoría por su ID
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield category_model_1.default.findByPk(id);
                return category;
            }
            catch (error) {
                console.error("Error retrieving category:", error);
                throw new Error("Error retrieving category");
            }
        });
    }
    // Actualiza una categoría por su ID
    update(id, categoryData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield category_model_1.default.findByPk(id);
                if (!category) {
                    return null; // Categoría no encontrada
                }
                // Actualiza los datos
                yield category.update(categoryData);
                return category;
            }
            catch (error) {
                console.error("Error updating category:", error);
                throw new Error("Error updating category");
            }
        });
    }
    // Elimina una categoría por su ID
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield category_model_1.default.findByPk(id);
                if (!category) {
                    return null; // Categoría no encontrada
                }
                // Elimina la categoría
                yield category.destroy();
                return true;
            }
            catch (error) {
                console.error("Error deleting category:", error);
                throw new Error("Error deleting category");
            }
        });
    }
}
exports.CategoryService = CategoryService;
