import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './Routes/userRoute.js';

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

app.use(router);
