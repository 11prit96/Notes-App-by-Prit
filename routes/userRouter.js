import { Router } from 'express';
const router = Router();
import { authorizePermissions } from "../middlewares/authMiddleware.js"
import upload from '../middlewares/multerMiddleware.js';

import {
    getCurrentUser,
    getApplicationStats,
    updateUser
} from '../controllers/user_controller.js';
import { validateUpdateUserInput } from '../middlewares/validationMiddleware.js';

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [
    authorizePermissions('admin'),
    getApplicationStats,
]);
router.patch(
    '/update-user',
    upload.single('avatar'),
    validateUpdateUserInput,
    updateUser);
export default router;