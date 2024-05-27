import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const router = new express.Router();

router.post('/register', (req, res) => {
  const { name, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent successfully:', info.response);
        res
          .status(201)
          .json({ staus: 201, info, msg: 'Email sent successfully' });
      }
    });
  } catch (error) {
    res.status(404).json({ staus: 404, error, msg: 'Email sent successfully' });
  }
});

export default router;
