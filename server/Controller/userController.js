import { Intro, About, Project, Experience } from '../Models/portfolioModel.js';

export const IntroSection = async (res, req) => {
  console.log('first');
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const experiences = await Experience.find();

    res.status(200).send({
      userIntro: intros[0],
      userAbout: abouts[0],
      userProject: projects,
      userExperience: experiences,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
