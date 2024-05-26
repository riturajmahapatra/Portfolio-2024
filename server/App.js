const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is runng smoothly on port ${port}`);
});

// const transporter = nodemailer.createTransport({
//   host: 'riturajmahapatra@gmail.com',
//   port: port,
//   secure: false,
//   auth: {
//     user: 'maddison53@ethereal.email',
//     pass: 'jn7jnAPss4f63QBp6D',
//   },
// });
