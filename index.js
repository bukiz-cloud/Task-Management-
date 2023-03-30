import express from 'express';
import {dbConnect}  from './config/db.js';

import dotenv from 'dotenv'
import User from './model/User.js';
import userRoutes from './routes/userRoutes.js';
import router from './routes/taskRoutes.js';


const PORT = process.env.PORT || 7000
const app = express();
app.use(express.json())
dotenv.config();

dbConnect();
app.use("/api/v1/users", userRoutes);
app.use("/api", router);

app.listen(PORT, () => console.log (`Server is running at ${PORT} `));