import express from 'express';
import { API_ROUTES } from '..';
import CategoryController from '../../controllers/category-controller';

const router = express.Router();

router.post(API_ROUTES.CREATE_CATEGORY, CategoryController.createCategory);
router.get(API_ROUTES.GET_CATEGORY_BY_ID, CategoryController.getCategoryById);

export default router;
