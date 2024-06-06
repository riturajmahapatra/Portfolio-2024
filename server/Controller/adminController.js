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

// update page content

router.post('/update-intro', async (req, res) => {
  try {
    const intro = await Intro.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res
      .status(200)
      .send({ data: intro, success: true, msg: 'Intro Updated Sucessfully' });
    console.log('data updated');
  } catch (error) {
    console.error('Error Updating Data:', error);
    res.status(500).send('Server Error');
  }
});
router.post('/update-about', async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res
      .status(200)
      .send({ data: about, success: true, msg: 'About Updated Sucessfully' });
    console.log('data updated');
  } catch (error) {
    console.error('Error Updating Data:', error);
    res.status(500).send('Server Error');
  }
});

export default router;
