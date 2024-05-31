import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import jansevaImg from '/js-1.png';
import carWalaImg from '/cw-1.png';
import crudAppImg from '/ca-1.png';
import taxiImg from '/tx-1.png';
import countrynomicsImg from '/cn-1.png';

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
    imageUrl: crudAppImg,
    imgHref: 'https://car-wala.vercel.app',
  },
];

export const experiencesData = [
  {
    title: 'Junior Developer Intern',
    company: 'AI Thinkers',
    location: 'Remote',
    description:
      'Started my full stack development journey as a junior developer intern. Leveraged the opportunity to upskill myself and tackle full-stack projects, expanding my skillset beyond front-end development.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2024 - present',
  },
  {
    title: 'Front-End Developer',
    location: 'Dwarka , Delhi',
    company: 'Alishu Infotech Pvt Ltd.',
    description: `Leveraged my front-end development skills for 6 months. I built and maintained user interfaces for various projects like NGO websites, security websites, and e-commerce platforms.`,
    icon: React.createElement(CgWorkAlt),
    date: 'May 2023 - Nov 2023',
  },
  {
    title: 'Channel Manager',
    location: 'Gurugram , Hayana',
    company: '4b Network Pvt Ltd.',
    description:
      'Leveraged my expertise in channel management for a year. Built and nurtured strong relationships with key partners, resulting in increased sales and market penetration. ',
    icon: React.createElement(CgWorkAlt),
    date: 'Apr 2022 - Mar 2023',
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
  'GitHub',
  'Tailwind',
  'MongoDB',
  'Express',
  'Framer Motion',
  'Figma',
] as const;
