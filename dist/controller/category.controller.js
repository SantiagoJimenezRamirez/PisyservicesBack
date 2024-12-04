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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("../services/category.service");
class CategoryController {
    constructor() { }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const name = req.body.category;
            try {
                const categoryService = new category_service_1.CategoryService();
                const category = yield categoryService.add({ name });
                if (!category) {
                    return res.status(400).json({
                        msg: "Invalid Category",
                    });
                }
                return res.status(201).json({
                    message: "Category created successfully!",
                    category,
                });
            }
            catch (error) {
                console.error("Error creating category:", error);
                // Manejo específico de errores de unicidad
                if (error.name === "SequelizeUniqueConstraintError") {
                    return res.status(409).json({
                        message: "Category already exists.",
                    });
                }
                return res.status(500).json({
                    message: "An error occurred while creating the category.",
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryService = new category_service_1.CategoryService();
                const categories = yield categoryService.getAll();
                return res.status(200).json({
                    ok: true,
                    categories,
                });
            }
            catch (error) {
                console.error("Error retrieving categories:", error);
                return res.status(500).json({
                    message: "An error occurred while retrieving categories.",
                });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const categoryService = new category_service_1.CategoryService();
                const category = yield categoryService.getById(Number(id));
                if (!category) {
                    return res.status(404).json({
                        msg: "Category not found",
                    });
                }
                return res.status(200).json({
                    ok: true,
                    category,
                });
            }
            catch (error) {
                console.error("Error retrieving category:", error);
                return res.status(500).json({
                    message: "An error occurred while retrieving the category.",
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const name = req.body.category;
            try {
                const categoryService = new category_service_1.CategoryService();
                const updatedCategory = yield categoryService.update(Number(id), { name });
                if (!updatedCategory) {
                    return res.status(400).json({
                        msg: "Unable to update category",
                    });
                }
                return res.status(200).json({
                    message: "Category updated successfully!",
                    category: updatedCategory,
                });
            }
            catch (error) {
                console.error("Error updating category:", error);
                return res.status(500).json({
                    message: "An error occurred while updating the category.",
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const categoryService = new category_service_1.CategoryService();
                const deleted = yield categoryService.delete(Number(id));
                if (!deleted) {
                    return res.status(400).json({
                        msg: "Unable to delete category",
                    });
                }
                return res.status(200).json({
                    message: "Category deleted successfully!",
                });
            }
            catch (error) {
                console.error("Error deleting category:", error);
                return res.status(500).json({
                    message: "An error occurred while deleting the category.",
                });
            }
        });
    }
}
exports.CategoryController = CategoryController;
