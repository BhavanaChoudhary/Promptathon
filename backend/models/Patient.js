import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; // ✅ Generate unique IDs

const patientSchema = new mongoose.Schema({
  PatientID: { type: String, unique: true, default: uuidv4 }, // ✅ Unique Patient ID
  FullName: { type: String, required: true },
  DateOfBirth: { type: String, required: true },
  Gender: { type: String, required: true },
  BloodGroup: { type: String, required: true },
  MedicalProfile: {
    PreExistingConditions: [String],
    Allergies: [String],
    OngoingMedications: [{ MedicineName: String }]
  },
  MedicalVisits: [
    {
      VisitName: String,
      Date: String,
      Symptoms: [String],
      Diagnosis: String,
      Prescriptions: [{ Medicine: String }]
    }
  ]
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
