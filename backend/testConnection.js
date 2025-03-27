import mongoose from "mongoose";

console.log("📡 Connecting to MongoDB Atlas...");

const uri = "mongodb+srv://bhavxchoudhary:hello@doctor.xiireck.mongodb.net/?retryWrites=true&w=majority&appName=doctor";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ Connection failed:", err));
