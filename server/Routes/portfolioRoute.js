import express from 'express';
import { IntroSection } from '../Controller/userController.js';

const route = express.Router();

route.get('/getall', IntroSection);

export default route;
