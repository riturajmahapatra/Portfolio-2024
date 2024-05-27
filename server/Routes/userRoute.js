import express from 'express';
// import { test } from '../Controller/userController.js';
import { test } from '../Controller/userController.js';

const router = express.Router();

router.get('/test', (res, req) => {
  res.json({ message: 'API is working properly' });
});
router.get('/rest', test);

export default router;
