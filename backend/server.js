import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Patient from "./models/Patient.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// API Route to Book an Appointment
app.post("/api/book-appointments", async (req, res) => {
  try {
    console.log("Received Data:", req.body);
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: "Patient registered successfully!", patient: newPatient });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to register patient" });
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
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
