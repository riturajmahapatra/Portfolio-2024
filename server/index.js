import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
// import router from './Routes/userRoute.js';
// import authRouter from './Routes/authRoute.js';
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.use(router);

/* login */
// app.use('/api/v1', authRouter);

export default app;
