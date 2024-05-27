import express from 'express';
// import { test } from '../Controller/userController.js';

const router = new express.Router();

// router.get('/test', (res, req) => {
//   res.json({ message: 'API is working properly' });
// });
// router.get('/rest', test);

router.post('/register', (req, res) => {
  console.log(req.body);
});

export default router;
