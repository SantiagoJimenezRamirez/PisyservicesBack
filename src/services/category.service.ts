import Category from "../model/category.model";


export class CategoryService {
    constructor() {}

    // Crea una nueva categoría
    async add(categoryData: any) {
        try {
            const [category, created] = await Category.findOrCreate({
                where: { name: categoryData.name },
                defaults: categoryData, // Incluye otros datos si es necesario
            });
    
            if (!created) {
                console.log("Category already exists:", category);
            }
    
            return category;
        } catch (error) {
            console.error("Error creating category:", error);
            throw error; // Lanza el error para que el controlador lo maneje
        }
    }
    

    // Obtiene todas las categorías
    async getAll() {
        try {
            const categories = await Category.findAll();
            return categories;
        } catch (error) {
            console.error("Error retrieving categories:", error);
            throw new Error("Error retrieving categories");
        }
    }

    // Obtiene una categoría por su ID
    async getById(id: number) {
        try {
            const category = await Category.findByPk(id);
            return category;
        } catch (error) {
            console.error("Error retrieving category:", error);
            throw new Error("Error retrieving category");
        }
    }

    // Actualiza una categoría por su ID
    async update(id: number, categoryData: { name: string }) {
        try {
            const category = await Category.findByPk(id);
            if (!category) {
                return null; // Categoría no encontrada
            }

            // Actualiza los datos
            await category.update(categoryData);
            return category;
        } catch (error) {
            console.error("Error updating category:", error);
            throw new Error("Error updating category");
        }
    }

    // Elimina una categoría por su ID
    async delete(id: number) {
        try {
            const category = await Category.findByPk(id);
            if (!category) {
                return null; // Categoría no encontrada
            }

            // Elimina la categoría
            await category.destroy();
            return true;
        } catch (error) {
            console.error("Error deleting category:", error);
            throw new Error("Error deleting category");
        }
    }
}
