import mongoose from 'mongoose';

const introSchema = new mongoose.Schema({
  introduction: {
    type: String,
    required: true,
    // i can add pdf file here as well
  },
});

const aboutSchema = new mongoose.Schema({
  about: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imgHref: {
    type: String,
  },
});

const skillSchema = new mongoose.Schema({
  skills: {
    type: [String],
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Intro = mongoose.model('Intro', introSchema);
export const About = mongoose.model('About', aboutSchema);
export const Project = mongoose.model('Project', projectSchema);
export const Skill = mongoose.model('Skill', skillSchema);
export const Experience = mongoose.model('Experience', experienceSchema);
