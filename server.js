import express from 'express';
import cors from 'cors';

// import 'dotenv/config';
// import mongoose from 'mongoose'; --- IGNORE ---  
import routes from './src/routes/routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use('/api', routes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});