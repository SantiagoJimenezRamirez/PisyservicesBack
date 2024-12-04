import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export class CategoryController {
    constructor() {}

    async add(req: Request, res: Response) {
        console.log(req.body);
        const name = req.body.category;
    
        try {
            const categoryService = new CategoryService();
            const category = await categoryService.add({ name });
    
            if (!category) {
                return res.status(400).json({
                    msg: "Invalid Category",
                });
            }
    
            return res.status(201).json({
                message: "Category created successfully!",
                category,
            });
        } catch (error: any) {
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
    }
    

    async getAll(req: Request, res: Response) {
        try {
            const categoryService = new CategoryService();
            const categories = await categoryService.getAll();

            return res.status(200).json({
                ok: true,
                categories,
            });
        } catch (error) {
            console.error("Error retrieving categories:", error);
            return res.status(500).json({
                message: "An error occurred while retrieving categories.",
            });
        }
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const categoryService = new CategoryService();
            const category = await categoryService.getById(Number(id));

            if (!category) {
                return res.status(404).json({
                    msg: "Category not found",
                });
            }

            return res.status(200).json({
                ok: true,
                category,
            });
        } catch (error) {
            console.error("Error retrieving category:", error);
            return res.status(500).json({
                message: "An error occurred while retrieving the category.",
            });
        }
    }

    async update(req: Request, res: Response) {
        console.log(req.body)
        const { id } = req.params;
        const name = req.body.category;

        try {
            const categoryService = new CategoryService();
            const updatedCategory = await categoryService.update(Number(id), { name });

            if (!updatedCategory) {
                return res.status(400).json({
                    msg: "Unable to update category",
                });
            }

            return res.status(200).json({
                message: "Category updated successfully!",
                category: updatedCategory,
            });
        } catch (error) {
            console.error("Error updating category:", error);
            return res.status(500).json({
                message: "An error occurred while updating the category.",
            });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const categoryService = new CategoryService();
            const deleted = await categoryService.delete(Number(id));

            if (!deleted) {
                return res.status(400).json({
                    msg: "Unable to delete category",
                });
            }

            return res.status(200).json({
                message: "Category deleted successfully!",
            });
        } catch (error) {
            console.error("Error deleting category:", error);
            return res.status(500).json({
                message: "An error occurred while deleting the category.",
            });
        }
    }
}
