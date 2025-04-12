import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const patientSchema = new mongoose.Schema({
  PatientID: { type: String, unique: true, default: uuidv4 },
  Email: { type: String, required: true, unique: true },
  FullName: { type: String, required: true },
  DateOfBirth: { type: String, required: true },
  Gender: { type: String, required: true },
  BloodGroup: { type: String, required: true },
  Weight: { type: Number },      // in kg
  Height: { type: Number },      // in cm
  BMI: { type: Number },         // calculated
  BloodPressure: { type: String }, // optional

  MedicalProfile: {
    PreExistingConditions: [], // kept as placeholder if needed later
    Allergies: [],
    OngoingMedications: [],
  },

  MedicalVisits: [], // structure simplified for now
  TotalVisits: { type: Number, default: 0 }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
