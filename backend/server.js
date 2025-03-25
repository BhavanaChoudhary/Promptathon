import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Patient from './models/Patient.js'; // Import the Patient model

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Important for handling JSON requests
app.use(express.urlencoded({ extended: true })); // For form data parsing

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/appointments', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// API Route for booking appointments
app.post('/api/book-appointments', async (req, res) => {
  try {
      console.log("Received Data:", req.body); // Log incoming request

      const newPatient = new Patient(req.body);
      await newPatient.save();

      res.status(201).json({ message: "Patient registered successfully!", patient: newPatient });
  } catch (error) {
      console.error("Error saving patient:", error);
      res.status(500).json({ error: error.message });
  }
});

// API Route to get all patients
app.get('/api/appointments', async (req, res) => {
  try {
      const patients = await Patient.find().sort({ createdAt: -1 }).limit(15);
      res.json(patients);
  } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: error.message });
  }
});

// Start the Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
