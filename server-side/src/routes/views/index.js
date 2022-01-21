import express from 'express';
import { VIEW_ROUTES } from '..';
import AdminController from '../../controllers/admin-controller';
import CategoryController from '../../controllers/category-controller';
import NominalController from '../../controllers/nominal-controller';

const router = express.Router();

router.get(VIEW_ROUTES.ADMIN, AdminController.dashboardView);
router.get(VIEW_ROUTES.CATEGORY, CategoryController.categoryView);
router.get(VIEW_ROUTES.CREATE_CATEGORY, CategoryController.formCreateCategoryView);
router.get(VIEW_ROUTES.UPDATE_CATEGORY, CategoryController.formUpdateCategoryView);
router.get(VIEW_ROUTES.UPDATE_CATEGORY, CategoryController.updateCategory);

router.get(VIEW_ROUTES.NOMINAL, NominalController.nominalView);
router.get(VIEW_ROUTES.CREATE_NOMINAL, NominalController.formCreateNominalView);

export default router;
