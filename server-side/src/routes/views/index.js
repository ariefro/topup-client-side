import express from 'express';
import { VIEW_ROUTES } from '..';
import AdminController from '../../controllers/admin-controller';

const router = express.Router();

router.get(VIEW_ROUTES.ADMIN, AdminController.dashboardView);
router.get(VIEW_ROUTES.CATEGORY, AdminController.categoryView);

export default router;
