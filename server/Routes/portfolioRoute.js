import express from 'express';
import { IntroSection } from '../Controller/userController.js';

const route = express.Router();

route.get('/portfolio', IntroSection);

export default route;
