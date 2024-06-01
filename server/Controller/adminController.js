// Import necessary modules
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = new express.Router();

import { Intro, About, Project, Experience } from '../Models/portfolioModel.js';

router.get('/data', async (req, res) => {
  try {
    const data = {
      intro: await Intro.find(),
      about: await About.find(),
      projects: await Project.find(),
      experiences: await Experience.find(),
    };
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Server Error');
  }
});

export default router;
