import express from 'express';
import { IntroSection } from '../Controller/userController';

const route = express.Router();

route.get('/getall', IntroSection);

export default route;
