import { Router } from 'express';
import { CategoryController } from '../controller/category.controller';

const categoryController = new CategoryController()
const routerCategory = Router();

routerCategory.get('/', categoryController.getAll);
routerCategory.get('/:id', categoryController.getById);
routerCategory.post('/', categoryController.add);
routerCategory.put('/:id', categoryController.update);
routerCategory.delete('/:id', categoryController.delete);

export default routerCategory;
