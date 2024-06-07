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

// experience

router.post('/add-experience', async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();

    res.status(200).send({
      data: experience,
      success: true,
      msg: 'Experience Added Sucessfully',
    });
    console.log('data updated');
  } catch (error) {
    console.error('Error Updating Data:', error);
    res.status(500).send('Server Error');
  }
});

router.post('/update-experience', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      msg: 'Experience Updated Sucessfully',
    });
    console.log('data updated');
  } catch (error) {
    console.error('Error Updating Data:', error);
    res.status(500).send('Server Error');
  }
});

router.post('/delete-experience', async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      msg: 'Experience Deleted Sucessfully',
    });
    console.log('data updated');
  } catch (error) {
    console.error('Error Updating Data:', error);
    res.status(500).send('Server Error');
  }
});

// projects

router.post('/add-project', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.status(200).send({
      data: project,
      success: true,
      msg: 'Project Added Sucessfully',
    });
    console.log('data updated');
  } catch (error) {
    console.error('Error Updating Data:', error);
    res.status(500).send('Server Error');
  }
});

router.post('/update-project', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      msg: 'Project Updated Sucessfully',
    });
    console.log('data updated');
  } catch (error) {
    console.error('Error Updating Data:', error);
    res.status(500).send('Server Error');
  }
});

router.post('/delete-project', async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      msg: 'Project Deleted Sucessfully',
    });
    console.log('data updated');
  } catch (error) {
    console.error('Error Updating Data:', error);
    res.status(500).send('Server Error');
  }
});

export default router;
