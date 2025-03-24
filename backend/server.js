import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Define Schema & Model
const appointmentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  problemDescription: String,
  patientHistory: String,
  condition: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

app.post('/api/book-appointment', async (req, res) => {
    console.log("Received request to book appointment:", req.body); // Log incoming request

  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
