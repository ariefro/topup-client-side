import express from 'express';
import { API_ROUTES } from '..';
import CategoryController from '../../controllers/category-controller';

const router = express.Router();

router.post(API_ROUTES.CREATE_CATEGORY, CategoryController.createCategory);
router.get(API_ROUTES.GET_CATEGORIES, CategoryController.getCategories);
router.get(API_ROUTES.GET_CATEGORY_BY_ID, CategoryController.getCategoryById);
router.put(API_ROUTES.UPDATE_CATEGORY, CategoryController.updateCategory);
router.delete(API_ROUTES.DELETE_CATEGORY, CategoryController.deleteCategory);

export default router;
