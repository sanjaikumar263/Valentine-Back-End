import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import valentineRoutes from './routes/valentineRoutes.js';


dotenv.config();


const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/valentine', valentineRoutes);

const mongoURI = process.env.MONGO_URI;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err.message);
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`🌹 Server running on port ${PORT}`);
});