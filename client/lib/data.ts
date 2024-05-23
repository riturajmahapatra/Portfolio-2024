import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import jansevaImg from '../src/assets/js-1.png';
import carWalaImg from '../src/assets/cw-1.png';
import taxiImg from '../src/assets/tx-1.png';
import countrynomicsImg from '../src/assets/cn-1.png';
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Taxi App',
    description:
      'This project is a frontend prototype taxi booking application. Built with a focus on user experience, it provides a convenient and efficient way to hail a cab',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    imageUrl: taxiImg,
    imgHref: 'https://ai-thinkers-assignment-sr2j.vercel.app/',
  },
  {
    title: 'JanSevva',
    description:
      'It is a NGO website which helps bridge the gap to connect donors with underprivileged children.',
    tags: ['React', 'MongoDB', 'Tailwind', 'Express'],
    imageUrl: jansevaImg,
    imgHref: 'https://janseva-2-zeta.vercel.app/',
  },
  {
    title: 'Countrynomics',
    description:
      'An interactive platform displaying economic and geographic data of various countries. Utilized an API to access and visualize real-time data on demographics, and geographical features',
    tags: ['React', 'Tailwind'],
    imageUrl: countrynomicsImg,
    imgHref: 'https://countrynomics.vercel.app/',
  },
  {
    title: 'Car Wala',
    description:
      'A comprehensive database of car models with detailed specifications. Includes fuel efficiency ratings, estimated costs, and comparisons between models.',
    tags: ['Next.js', 'Tailwind', 'MongoDB'],
    imageUrl: carWalaImg,
    imgHref: 'https://car-wala.vercel.app',
  },
  {
    title: 'Crud App',
    description:
      'This CRUD app is a fundamental web application that allows users to perform Create, Read, Update, and Delete operations on data.',
    tags: ['React', 'Express', 'Node.js', 'MongoDB'],
    imageUrl: carWalaImg,
    imgHref: 'https://car-wala.vercel.app',
  },
];

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Express',
  'Framer Motion',
  'Figma',
] as const;
