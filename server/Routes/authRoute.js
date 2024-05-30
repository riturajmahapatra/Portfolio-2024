import express from 'express';

import {
  addExperience,
  getUser,
  login,
  logout,
  myProfile,
  updateUser,
} from '../Controller/authController.js';
import { isAuthenticated } from '../Middlewares/auth.js';
const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);
router.get('/user', getUser);
router.get('/me', isAuthenticated, myProfile);
router.put('/admin/update', isAuthenticated, updateUser);
router.put('/admin/experience/add', isAuthenticated, addExperience);

export default router;
