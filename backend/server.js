import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Patient from "./models/Patient.js";
import axios from "axios";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// POST: Register a New Patient
app.post("/api/book-appointments", async (req, res) => {
  try {
    const {
      Email,
      FullName,
      DateOfBirth,
      Gender,
      BloodGroup,
      Weight,
      Height,
      BMI,
      MedicalProfile,
    } = req.body;

    // Basic validation
    if (!Email || !FullName || !DateOfBirth || !Gender || !BloodGroup) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const newPatient = new Patient({
      Email,
      FullName,
      DateOfBirth,
      Gender,
      BloodGroup,
      Weight,
      Height,
      BMI,
      MedicalProfile: {
        PreExistingConditions: MedicalProfile?.PreExistingConditions || [],
        Allergies: MedicalProfile?.Allergies || [],
        OngoingMedications: MedicalProfile?.OngoingMedications || [],
        ChronicConditions: MedicalProfile?.ChronicConditions || [],
        GeneticDisorders: MedicalProfile?.GeneticDisorders || [],
      },
    });

    await newPatient.save();
    res.status(201).json({ message: "Patient registered successfully", patient: newPatient });
  } catch (error) {
    console.error("Error registering patient:", error);

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ error: "Validation failed", details: errors });
    }

    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }

    res.status(500).json({ error: "Failed to register patient" });
  }
});

// GET: Retrieve Recent Patients
app.get("/api/appointments", async (req, res) => {
  try {
    const patients = await Patient.find().sort({ createdAt: -1 }).limit(15);
    res.json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({ error: "Failed to fetch patients" });
  }
});

// Local medicine database
const medicineDatabase = {
  Diabetes: [
    { name: "Metformin", price: 15, manufacturer: "Sun Pharma", dosage: "500mg" },
    { name: "Glimipiride", price: 20, manufacturer: "Cipla", dosage: "2mg" },
    { name: "Insulin Glargine", price: 450, manufacturer: "Sanofi", dosage: "100IU/ml" }
  ],
  Hypertension: [
    { name: "Amlodipine", price: 18, manufacturer: "Dr Reddy's", dosage: "5mg" },
    { name: "Losartan", price: 25, manufacturer: "Lupin", dosage: "50mg" },
    { name: "Atenolol", price: 30, manufacturer: "Cipla", dosage: "50mg" }
  ],
  default: [
    { name: "Paracetamol", price: 10, manufacturer: "Generic", dosage: "500mg" },
    { name: "Ibuprofen", price: 12, manufacturer: "Generic", dosage: "400mg" }
  ]
};

app.get("/api/medicines", (req, res) => {
  const { disease, budget } = req.query;
  
  // Input validation
  if (!disease || !budget || isNaN(budget)) {
    return res.status(400).json({ 
      error: "Invalid parameters",
      message: "Both disease and valid budget are required"
    });
  }

  const budgetValue = parseFloat(budget);
  const medicines = medicineDatabase[disease] || medicineDatabase.default;
  
  const filteredMedicines = medicines.filter(med => 
    med.price <= budgetValue
  );

  res.json({
    disease,
    budget,
    count: filteredMedicines.length,
    medicines: filteredMedicines
  });
});
// Health Check Endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "operational",
    creator: "Bhavana B Choudhary",
    project: "Appointment Booking API",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📥 Booking: http://localhost:${PORT}/api/book-appointments`);
  console.log(`📋 Appointments: http://localhost:${PORT}/api/appointments`);
});
