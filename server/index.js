import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './Routes/userRoute.js';
import router from './Routes/userRoute.js';

// import portfoloRoutes from './Routes/portfolioRoute.js';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//port connection to the backend server
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
  })
  .catch((error) => console.error('Error connecting to MongoDB: ', error));

// app.use('/api', portfoloRoutes);

//testing api
app.use('/api', userRoutes); //not working with routes?

app.get('/api/user/test', (req, res) => {
  res.json('Hello World');
});

/* email with nodemailer */

const EMAIL = process.env.EMAIL_USERNAME;
const PASSWORD = process.env.EMAIL_PASSWORD;
console.log(EMAIL, PASSWORD);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: EMAIL, pass: PASSWORD },
});
console.log('this is transporter', transporter.service, transporter.auth);

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: EMAIL,
    to: `${email}`,
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  console.log('this is mail options to-->', mailOptions.message);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please enter all fields' });
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent successfully:', info.response);
      res.send('Email sent successfully');
    }
  });
});

app.use(router);
