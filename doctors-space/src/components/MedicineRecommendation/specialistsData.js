// Maps diseases to medical specialties
export const diseaseSpecialtyMap = {
  "Fever": "General Practice",
  "Common Cold": "General Practice",
  "Headache": "General Practice",
  "Itching": "Dermatology",
  "Skin Rash": "Dermatology",
  "Chills": "General Practice",
  "Dehydration": "General Practice",
  "Diarrhea": "Gastroenterology",
  "Food Poisoning": "Gastroenterology",
  "Vomiting": "Gastroenterology",
  "Body Pain": "General Practice",
  "Cough": "Pulmonology",
  "Sore Throat": "ENT",
  "Ear Pain": "ENT",
  "Eye Redness": "Ophthalmology",
  "Nausea": "Gastroenterology",
  "Hypertension": "Cardiology",

  "Diabetes": "Endocrinology",
  "Asthma": "Pulmonology",
  "Tuberculosis": "Infectious Disease",
  "Malaria": "Infectious Disease",
  "Typhoid": "Internal Medicine",
  "Dengue": "Internal Medicine",
  "Chikungunya": "Internal Medicine",
  "Cholera": "Gastroenterology",
  "Hepatitis A": "Gastroenterology",
  "Leptospirosis": "Infectious Disease",
  "Influenza": "Internal Medicine",
  "COVID-19": "Pulmonology",
  "Leprosy": "Dermatology",
  "Cancer": "Oncology",
  "Hepatitis C": "Gastroenterology",
  "Multiple Sclerosis": "Neurology",
  "HIV/AIDS": "Infectious Disease"
};

// Specialist data with contact information
// Updated specialist data with exact specialty match
export const specialistsByTier = {
  "low": [
    // General Practice (10)
    { name: "Dr. Sunil Kumar", specialty: "General Practice", email: "sunil.gp@example.com", phone: "+91 90001 00001", priceRange: "₹100-₹300" },
    { name: "Dr. Priya Sharma", specialty: "General Practice", email: "priya.gp@example.com", phone: "+91 90001 00002", priceRange: "₹150-₹350" },
    { name: "Dr. Rajesh Patel", specialty: "General Practice", email: "rajesh.gp@example.com", phone: "+91 90001 00003", priceRange: "₹120-₹320" },
    { name: "Dr. Ananya Gupta", specialty: "General Practice", email: "ananya.gp@example.com", phone: "+91 90001 00004", priceRange: "₹200-₹400" },
    { name: "Dr. Vikram Singh", specialty: "General Practice", email: "vikram.gp@example.com", phone: "+91 90001 00005", priceRange: "₹180-₹380" },
    { name: "Dr. Neha Joshi", specialty: "General Practice", email: "neha.gp@example.com", phone: "+91 90001 00006", priceRange: "₹130-₹330" },
    { name: "Dr. Arun Desai", specialty: "General Practice", email: "arun.gp@example.com", phone: "+91 90001 00007", priceRange: "₹170-₹370" },
    { name: "Dr. Pooja Reddy", specialty: "General Practice", email: "pooja.gp@example.com", phone: "+91 90001 00008", priceRange: "₹140-₹340" },
    { name: "Dr. Sanjay Verma", specialty: "General Practice", email: "sanjay.gp@example.com", phone: "+91 90001 00009", priceRange: "₹160-₹360" },
    { name: "Dr. Kavita Iyer", specialty: "General Practice", email: "kavita.gp@example.com", phone: "+91 90001 00010", priceRange: "₹190-₹390" },

    // Dermatology (10)
    { name: "Dr. Rohan Malhotra", specialty: "Dermatology", email: "rohan.derm@example.com", phone: "+91 90002 00001", priceRange: "₹200-₹500" },
    { name: "Dr. Ishita Kapoor", specialty: "Dermatology", email: "ishita.derm@example.com", phone: "+91 90002 00002", priceRange: "₹250-₹550" },
    { name: "Dr. Varun Reddy", specialty: "Dermatology", email: "varun.derm@example.com", phone: "+91 90002 00003", priceRange: "₹180-₹480" },
    { name: "Dr. Anjali Mehta", specialty: "Dermatology", email: "anjali.derm@example.com", phone: "+91 90002 00004", priceRange: "₹220-₹520" },
    { name: "Dr. Karan Johar", specialty: "Dermatology", email: "karan.derm@example.com", phone: "+91 90002 00005", priceRange: "₹300-₹600" },
    { name: "Dr. Meera Nair", specialty: "Dermatology", email: "meera.derm@example.com", phone: "+91 90002 00006", priceRange: "₹150-₹450" },
    { name: "Dr. Rahul Khanna", specialty: "Dermatology", email: "rahul.derm@example.com", phone: "+91 90002 00007", priceRange: "₹280-₹580" },
    { name: "Dr. Shreya Gupta", specialty: "Dermatology", email: "shreya.derm@example.com", phone: "+91 90002 00008", priceRange: "₹240-₹540" },
    { name: "Dr. Aditya Joshi", specialty: "Dermatology", email: "aditya.derm@example.com", phone: "+91 90002 00009", priceRange: "₹260-₹560" },
    { name: "Dr. Divya Rao", specialty: "Dermatology", email: "divya.derm@example.com", phone: "+91 90002 00010", priceRange: "₹190-₹490" }
  ],
  
  "medium": [
    // General Practice (10)
    { name: "Dr. Nandini Rao", specialty: "General Practice", email: "nandini.gp@example.com", phone: "+91 90101 00001", priceRange: "₹500-₹1200" },
    { name: "Dr. Amit Khanna", specialty: "General Practice", email: "amit.gp@example.com", phone: "+91 90101 00002", priceRange: "₹600-₹1300" },
    { name: "Dr. Shweta Iyer", specialty: "General Practice", email: "shweta.gp@example.com", phone: "+91 90101 00003", priceRange: "₹550-₹1250" },
    { name: "Dr. Rakesh Malhotra", specialty: "General Practice", email: "rakesh.gp@example.com", phone: "+91 90101 00004", priceRange: "₹700-₹1500" },
    { name: "Dr. Anjali Kapoor", specialty: "General Practice", email: "anjali.gp@example.com", phone: "+91 90101 00005", priceRange: "₹650-₹1400" },
    { name: "Dr. Vikas Sharma", specialty: "General Practice", email: "vikas.gp@example.com", phone: "+91 90101 00006", priceRange: "₹800-₹1600" },
    { name: "Dr. Pooja Patel", specialty: "General Practice", email: "pooja.gp@example.com", phone: "+91 90101 00007", priceRange: "₹750-₹1550" },
    { name: "Dr. Rohit Gupta", specialty: "General Practice", email: "rohit.gp@example.com", phone: "+91 90101 00008", priceRange: "₹900-₹1800" },
    

    // Dermatology (10)
    { name: "Dr. Shalini Nair", specialty: "Dermatology", email: "shalini.derm@example.com", phone: "+91 90102 00001", priceRange: "₹800-₹2000" },
    { name: "Dr. Rajiv Kapoor", specialty: "Dermatology", email: "rajiv.derm@example.com", phone: "+91 90102 00002", priceRange: "₹900-₹2100" },
    { name: "Dr. Ananya Malhotra", specialty: "Dermatology", email: "ananya.derm@example.com", phone: "+91 90102 00003", priceRange: "₹850-₹2050" },
    { name: "Dr. Vikram Reddy", specialty: "Dermatology", email: "vikram.derm@example.com", phone: "+91 90102 00004", priceRange: "₹1000-₹2200" },
    { name: "Dr. Priyanka Sharma", specialty: "Dermatology", email: "priyanka.derm@example.com", phone: "+91 90102 00005", priceRange: "₹950-₹2150" },
    { name: "Dr. Karthik Iyer", specialty: "Dermatology", email: "karthik.derm@example.com", phone: "+91 90102 00006", priceRange: "₹1100-₹2300" },
    { name: "Dr. Divya Patel", specialty: "Dermatology", email: "divya.derm@example.com", phone: "+91 90102 00007", priceRange: "₹1050-₹2250" },
    { name: "Dr. Aditi Gupta", specialty: "Dermatology", email: "aditi.derm@example.com", phone: "+91 90102 00008", priceRange: "₹1200-₹2400" },
    { name: "Dr. Rohit Joshi", specialty: "Dermatology", email: "rohit.derm@example.com", phone: "+91 90102 00009", priceRange: "₹1150-₹2350" },
    { name: "Dr. Sneha Rao", specialty: "Dermatology", email: "sneha.derm@example.com", phone: "+91 90102 00010", priceRange: "₹1300-₹2500" }
  ],
  
  "high": [
    
    // Dermatology (10)
    { name: "Dr. Nandini Reddy", specialty: "Dermatology", email: "nandini.derm@example.com", phone: "+91 90202 00001", priceRange: "₹2500-₹7000" },
    { name: "Dr. Arjun Malhotra", specialty: "Dermatology", email: "arjun.derm@example.com", phone: "+91 90202 00002", priceRange: "₹3000-₹7500" },
    { name: "Dr. Kavita Menon", specialty: "Dermatology", email: "kavita.derm@example.com", phone: "+91 90202 00003", priceRange: "₹3500-₹8000" },
    { name: "Dr. Rohit Khanna", specialty: "Dermatology", email: "rohit.derm@example.com", phone: "+91 90202 00004", priceRange: "₹4000-₹8500" },
    { name: "Dr. Shalini Bajaj", specialty: "Dermatology", email: "shalini.derm@example.com", phone: "+91 90202 00005", priceRange: "₹4500-₹9000" },
    { name: "Dr. Vikram Malhotra", specialty: "Dermatology", email: "vikram.derm@example.com", phone: "+91 90202 00006", priceRange: "₹5000-₹9500" },
    { name: "Dr. Ananya Reddy", specialty: "Dermatology", email: "ananya.derm@example.com", phone: "+91 90202 00007", priceRange: "₹5500-₹10000" },
    { name: "Dr. Rajiv Kapoor", specialty: "Dermatology", email: "rajiv.derm@example.com", phone: "+91 90202 00008", priceRange: "₹6000-₹10500" },
    { name: "Dr. Priya Nair", specialty: "Dermatology", email: "priya.derm@example.com", phone: "+91 90202 00009", priceRange: "₹6500-₹11000" },
    { name: "Dr. Rohit Sharma", specialty: "Dermatology", email: "rohit.derm@example.com", phone: "+91 90202 00010", priceRange: "₹7000-₹12000" }
  ],
  
    "low": [
      // General Practice (5)
      { name: "Dr. Sunil Kumar", specialty: "General Practice", email: "sunil.gp@example.com", phone: "+91 90001 00001", priceRange: "₹100-₹300" },
      { name: "Dr. Priya Sharma", specialty: "General Practice", email: "priya.gp@example.com", phone: "+91 90001 00002", priceRange: "₹150-₹350" },
      { name: "Dr. Rajesh Patel", specialty: "General Practice", email: "rajesh.gp@example.com", phone: "+91 90001 00003", priceRange: "₹120-₹320" },
      { name: "Dr. Ananya Gupta", specialty: "General Practice", email: "ananya.gp@example.com", phone: "+91 90001 00004", priceRange: "₹200-₹400" },
      { name: "Dr. Vikram Singh", specialty: "General Practice", email: "vikram.gp@example.com", phone: "+91 90001 00005", priceRange: "₹180-₹380" },
  
      // Dermatology (5)
      { name: "Dr. Rohan Malhotra", specialty: "Dermatology", email: "rohan.derm@example.com", phone: "+91 90002 00001", priceRange: "₹200-₹500" },
      { name: "Dr. Ishita Kapoor", specialty: "Dermatology", email: "ishita.derm@example.com", phone: "+91 90002 00002", priceRange: "₹250-₹550" },
      { name: "Dr. Varun Reddy", specialty: "Dermatology", email: "varun.derm@example.com", phone: "+91 90002 00003", priceRange: "₹180-₹480" },
      { name: "Dr. Anjali Mehta", specialty: "Dermatology", email: "anjali.derm@example.com", phone: "+91 90002 00004", priceRange: "₹220-₹520" },
      { name: "Dr. Karan Johar", specialty: "Dermatology", email: "karan.derm@example.com", phone: "+91 90002 00005", priceRange: "₹300-₹600" },
  
      // Gastroenterology (5)
      { name: "Dr. Amit Sharma", specialty: "Gastroenterology", email: "amit.gastro@example.com", phone: "+91 90003 00001", priceRange: "₹250-₹600" },
      { name: "Dr. Neha Gupta", specialty: "Gastroenterology", email: "neha.gastro@example.com", phone: "+91 90003 00002", priceRange: "₹300-₹650" },
      { name: "Dr. Rajiv Kapoor", specialty: "Gastroenterology", email: "rajiv.gastro@example.com", phone: "+91 90003 00003", priceRange: "₹350-₹700" },
      { name: "Dr. Priya Nair", specialty: "Gastroenterology", email: "priya.gastro@example.com", phone: "+91 90003 00004", priceRange: "₹400-₹750" },
      { name: "Dr. Rohit Joshi", specialty: "Gastroenterology", email: "rohit.gastro@example.com", phone: "+91 90003 00005", priceRange: "₹450-₹800" },
  
      // Pulmonology (5)
      { name: "Dr. Rahul Mehta", specialty: "Pulmonology", email: "rahul.pulmo@example.com", phone: "+91 90004 00001", priceRange: "₹300-₹700" },
      { name: "Dr. Shreya Reddy", specialty: "Pulmonology", email: "shreya.pulmo@example.com", phone: "+91 90004 00002", priceRange: "₹350-₹750" },
      { name: "Dr. Arjun Malhotra", specialty: "Pulmonology", email: "arjun.pulmo@example.com", phone: "+91 90004 00003", priceRange: "₹400-₹800" },
      { name: "Dr. Ananya Kapoor", specialty: "Pulmonology", email: "ananya.pulmo@example.com", phone: "+91 90004 00004", priceRange: "₹450-₹850" },
      { name: "Dr. Vikram Sharma", specialty: "Pulmonology", email: "vikram.pulmo@example.com", phone: "+91 90004 00005", priceRange: "₹500-₹900" },
  
      // ENT (5)
      { name: "Dr. Sneha Nair", specialty: "ENT", email: "sneha.ent@example.com", phone: "+91 90005 00001", priceRange: "₹200-₹500" },
      { name: "Dr. Vijay Sethi", specialty: "ENT", email: "vijay.ent@example.com", phone: "+91 90005 00002", priceRange: "₹250-₹550" },
      { name: "Dr. Anjali Deshpande", specialty: "ENT", email: "anjali.ent@example.com", phone: "+91 90005 00003", priceRange: "₹300-₹600" },
      { name: "Dr. Rakesh Khanna", specialty: "ENT", email: "rakesh.ent@example.com", phone: "+91 90005 00004", priceRange: "₹350-₹650" },
      { name: "Dr. Pooja Rao", specialty: "ENT", email: "pooja.ent@example.com", phone: "+91 90005 00005", priceRange: "₹400-₹700" },
  
      // Ophthalmology (5)
      { name: "Dr. Arvind Joshi", specialty: "Ophthalmology", email: "arvind.oph@example.com", phone: "+91 90006 00001", priceRange: "₹300-₹600" },
      { name: "Dr. Anita Deshpande", specialty: "Ophthalmology", email: "anita.oph@example.com", phone: "+91 90006 00002", priceRange: "₹350-₹650" },
      { name: "Dr. Sameer Khan", specialty: "Ophthalmology", email: "sameer.oph@example.com", phone: "+91 90006 00003", priceRange: "₹400-₹700" },
      { name: "Dr. Meera Iyer", specialty: "Ophthalmology", email: "meera.oph@example.com", phone: "+91 90006 00004", priceRange: "₹450-₹750" },
      { name: "Dr. Sanjay Verma", specialty: "Ophthalmology", email: "sanjay.oph@example.com", phone: "+91 90006 00005", priceRange: "₹500-₹800" },
  
      // Cardiology (5)
      { name: "Dr. Anjali Desai", specialty: "Cardiology", email: "anjali.cardio@example.com", phone: "+91 90007 00001", priceRange: "₹400-₹800" },
      { name: "Dr. Rohit Khanna", specialty: "Cardiology", email: "rohit.cardio@example.com", phone: "+91 90007 00002", priceRange: "₹450-₹850" },
      { name: "Dr. Shalini Bajaj", specialty: "Cardiology", email: "shalini.cardio@example.com", phone: "+91 90007 00003", priceRange: "₹500-₹900" },
      { name: "Dr. Vikram Malhotra", specialty: "Cardiology", email: "vikram.cardio@example.com", phone: "+91 90007 00004", priceRange: "₹550-₹950" },
      { name: "Dr. Nandini Reddy", specialty: "Cardiology", email: "nandini.cardio@example.com", phone: "+91 90007 00005", priceRange: "₹600-₹1000" },
  
      // Endocrinology (5)
      { name: "Dr. Vikram Singh", specialty: "Endocrinology", email: "vikram.endo@example.com", phone: "+91 90008 00001", priceRange: "₹350-₹750" },
      { name: "Dr. Priya Sharma", specialty: "Endocrinology", email: "priya.endo@example.com", phone: "+91 90008 00002", priceRange: "₹400-₹800" },
      { name: "Dr. Rajiv Gupta", specialty: "Endocrinology", email: "rajiv.endo@example.com", phone: "+91 90008 00003", priceRange: "₹450-₹850" },
      { name: "Dr. Ananya Kapoor", specialty: "Endocrinology", email: "ananya.endo@example.com", phone: "+91 90008 00004", priceRange: "₹500-₹900" },
      { name: "Dr. Arjun Malhotra", specialty: "Endocrinology", email: "arjun.endo@example.com", phone: "+91 90008 00005", priceRange: "₹550-₹950" },
  
      // Infectious Disease (5)
      { name: "Dr. Priya Sharma", specialty: "Infectious Disease", email: "priya.id@example.com", phone: "+91 90009 00001", priceRange: "₹200-₹500" },
      { name: "Dr. Raj Patel", specialty: "Infectious Disease", email: "raj.id@example.com", phone: "+91 90009 00002", priceRange: "₹250-₹550" },
      { name: "Dr. Anjali Desai", specialty: "Infectious Disease", email: "anjali.id@example.com", phone: "+91 90009 00003", priceRange: "₹300-₹600" },
      { name: "Dr. Vikram Singh", specialty: "Infectious Disease", email: "vikram.id@example.com", phone: "+91 90009 00004", priceRange: "₹350-₹650" },
      { name: "Dr. Nandini Rao", specialty: "Infectious Disease", email: "nandini.id@example.com", phone: "+91 90009 00005", priceRange: "₹400-₹700" },
  
      // Internal Medicine (5)
      { name: "Dr. Raj Patel", specialty: "Internal Medicine", email: "raj.im@example.com", phone: "+91 90010 00001", priceRange: "₹200-₹600" },
      { name: "Dr. Ananya Gupta", specialty: "Internal Medicine", email: "ananya.im@example.com", phone: "+91 90010 00002", priceRange: "₹250-₹650" },
      { name: "Dr. Vikram Sharma", specialty: "Internal Medicine", email: "vikram.im@example.com", phone: "+91 90010 00003", priceRange: "₹300-₹700" },
      { name: "Dr. Priya Reddy", specialty: "Internal Medicine", email: "priya.im@example.com", phone: "+91 90010 00004", priceRange: "₹350-₹750" },
      { name: "Dr. Arjun Kapoor", specialty: "Internal Medicine", email: "arjun.im@example.com", phone: "+91 90010 00005", priceRange: "₹400-₹800" },
  
      // Oncology (5)
      { name: "Dr. Nandini Reddy", specialty: "Oncology", email: "nandini.onco@example.com", phone: "+91 90011 00001", priceRange: "₹500-₹1000" },
      { name: "Dr. Arjun Malhotra", specialty: "Oncology", email: "arjun.onco@example.com", phone: "+91 90011 00002", priceRange: "₹600-₹1100" },
      { name: "Dr. Kavita Menon", specialty: "Oncology", email: "kavita.onco@example.com", phone: "+91 90011 00003", priceRange: "₹700-₹1200" },
      { name: "Dr. Rohit Khanna", specialty: "Oncology", email: "rohit.onco@example.com", phone: "+91 90011 00004", priceRange: "₹800-₹1300" },
      { name: "Dr. Shalini Bajaj", specialty: "Oncology", email: "shalini.onco@example.com", phone: "+91 90011 00005", priceRange: "₹900-₹1400" },
  
      // Neurology (5)
      { name: "Dr. Arjun Malhotra", specialty: "Neurology", email: "arjun.neuro@example.com", phone: "+91 90012 00001", priceRange: "₹450-₹900" },
      { name: "Dr. Kavita Menon", specialty: "Neurology", email: "kavita.neuro@example.com", phone: "+91 90012 00002", priceRange: "₹500-₹950" },
      { name: "Dr. Vikram Sharma", specialty: "Neurology", email: "vikram.neuro@example.com", phone: "+91 90012 00003", priceRange: "₹550-₹1000" },
      { name: "Dr. Priya Nair", specialty: "Neurology", email: "priya.neuro@example.com", phone: "+91 90012 00004", priceRange: "₹600-₹1050" },
      { name: "Dr. Rajiv Kapoor", specialty: "Neurology", email: "rajiv.neuro@example.com", phone: "+91 90012 00005", priceRange: "₹650-₹1100" }
    ],
  
    "medium": [
      // General Practice (5)
      { name: "Dr. Nandini Rao", specialty: "General Practice", email: "nandini.gp@example.com", phone: "+91 90101 00001", priceRange: "₹500-₹1200" },
      { name: "Dr. Amit Khanna", specialty: "General Practice", email: "amit.gp@example.com", phone: "+91 90101 00002", priceRange: "₹600-₹1300" },
      { name: "Dr. Shweta Iyer", specialty: "General Practice", email: "shweta.gp@example.com", phone: "+91 90101 00003", priceRange: "₹550-₹1250" },
      { name: "Dr. Rakesh Malhotra", specialty: "General Practice", email: "rakesh.gp@example.com", phone: "+91 90101 00004", priceRange: "₹700-₹1500" },
      { name: "Dr. Anjali Kapoor", specialty: "General Practice", email: "anjali.gp@example.com", phone: "+91 90101 00005", priceRange: "₹650-₹1400" },
  
      // Dermatology (5)
      { name: "Dr. Shalini Nair", specialty: "Dermatology", email: "shalini.derm@example.com", phone: "+91 90102 00001", priceRange: "₹800-₹2000" },
      { name: "Dr. Rajiv Kapoor", specialty: "Dermatology", email: "rajiv.derm@example.com", phone: "+91 90102 00002", priceRange: "₹900-₹2100" },
      { name: "Dr. Ananya Malhotra", specialty: "Dermatology", email: "ananya.derm@example.com", phone: "+91 90102 00003", priceRange: "₹850-₹2050" },
      { name: "Dr. Vikram Reddy", specialty: "Dermatology", email: "vikram.derm@example.com", phone: "+91 90102 00004", priceRange: "₹1000-₹2200" },
      { name: "Dr. Priyanka Sharma", specialty: "Dermatology", email: "priyanka.derm@example.com", phone: "+91 90102 00005", priceRange: "₹950-₹2150" },
  
      // Gastroenterology (5)
      { name: "Dr. Rajiv Gupta", specialty: "Gastroenterology", email: "rajiv.gastro@example.com", phone: "+91 90103 00001", priceRange: "₹1000-₹2500" },
      { name: "Dr. Anjali Desai", specialty: "Gastroenterology", email: "anjali.gastro@example.com", phone: "+91 90103 00002", priceRange: "₹1100-₹2600" },
      { name: "Dr. Vikram Singh", specialty: "Gastroenterology", email: "vikram.gastro@example.com", phone: "+91 90103 00003", priceRange: "₹1200-₹2700" },
      { name: "Dr. Priya Nair", specialty: "Gastroenterology", email: "priya.gastro@example.com", phone: "+91 90103 00004", priceRange: "₹1300-₹2800" },
      { name: "Dr. Rohit Joshi", specialty: "Gastroenterology", email: "rohit.gastro@example.com", phone: "+91 90103 00005", priceRange: "₹1400-₹2900" },
  
      // Pulmonology (5)
      { name: "Dr. Sameer Khan", specialty: "Pulmonology", email: "sameer.pulmo@example.com", phone: "+91 90104 00001", priceRange: "₹1200-₹2800" },
      { name: "Dr. Anita Deshpande", specialty: "Pulmonology", email: "anita.pulmo@example.com", phone: "+91 90104 00002", priceRange: "₹1300-₹2900" },
      { name: "Dr. Rakesh Verma", specialty: "Pulmonology", email: "rakesh.pulmo@example.com", phone: "+91 90104 00003", priceRange: "₹1400-₹3000" },
      { name: "Dr. Shweta Iyer", specialty: "Pulmonology", email: "shweta.pulmo@example.com", phone: "+91 90104 00004", priceRange: "₹1500-₹3100" },
      { name: "Dr. Vikram Malhotra", specialty: "Pulmonology", email: "vikram.pulmo@example.com", phone: "+91 90104 00005", priceRange: "₹1600-₹3200" },
  
      // ENT (5)
      { name: "Dr. Vijay Sethi", specialty: "ENT", email: "vijay.ent@example.com", phone: "+91 90105 00001", priceRange: "₹900-₹2200" },
      { name: "Dr. Anjali Deshpande", specialty: "ENT", email: "anjali.ent@example.com", phone: "+91 90105 00002", priceRange: "₹1000-₹2300" },
      { name: "Dr. Rakesh Khanna", specialty: "ENT", email: "rakesh.ent@example.com", phone: "+91 90105 00003", priceRange: "₹1100-₹2400" },
      { name: "Dr. Pooja Rao", specialty: "ENT", email: "pooja.ent@example.com", phone: "+91 90105 00004", priceRange: "₹1200-₹2500" },
      { name: "Dr. Sanjay Verma", specialty: "ENT", email: "sanjay.ent@example.com", phone: "+91 90105 00005", priceRange: "₹1300-₹2600" },
  
      // Ophthalmology (5)
      { name: "Dr. Anita Deshpande", specialty: "Ophthalmology", email: "anita.oph@example.com", phone: "+91 90106 00001", priceRange: "₹800-₹2000" },
      { name: "Dr. Sameer Khan", specialty: "Ophthalmology", email: "sameer.oph@example.com", phone: "+91 90106 00002", priceRange: "₹900-₹2100" },
      { name: "Dr. Meera Iyer", specialty: "Ophthalmology", email: "meera.oph@example.com", phone: "+91 90106 00003", priceRange: "₹1000-₹2200" },
      { name: "Dr. Sanjay Verma", specialty: "Ophthalmology", email: "sanjay.oph@example.com", phone: "+91 90106 00004", priceRange: "₹1100-₹2300" },
      { name: "Dr. Divya Patel", specialty: "Ophthalmology", email: "divya.oph@example.com", phone: "+91 90106 00005", priceRange: "₹1200-₹2400" },
  
      // Cardiology (5)
      { name: "Dr. Rohit Khanna", specialty: "Cardiology", email: "rohit.cardio@example.com", phone: "+91 90107 00001", priceRange: "₹1500-₹3500" },
      { name: "Dr. Shalini Bajaj", specialty: "Cardiology", email: "shalini.cardio@example.com", phone: "+91 90107 00002", priceRange: "₹1600-₹3600" },
      { name: "Dr. Vikram Malhotra", specialty: "Cardiology", email: "vikram.cardio@example.com", phone: "+91 90107 00003", priceRange: "₹1700-₹3700" },
      { name: "Dr. Nandini Reddy", specialty: "Cardiology", email: "nandini.cardio@example.com", phone: "+91 90107 00004", priceRange: "₹1800-₹3800" },
      { name: "Dr. Kavita Menon", specialty: "Cardiology", email: "kavita.cardio@example.com", phone: "+91 90107 00005", priceRange: "₹1900-₹3900" },
  
      // Endocrinology (5)
      { name: "Dr. Priya Sharma", specialty: "Endocrinology", email: "priya.endo@example.com", phone: "+91 90108 00001", priceRange: "₹1200-₹3000" },
      { name: "Dr. Rajiv Gupta", specialty: "Endocrinology", email: "rajiv.endo@example.com", phone: "+91 90108 00002", priceRange: "₹1300-₹3100" },
      { name: "Dr. Ananya Kapoor", specialty: "Endocrinology", email: "ananya.endo@example.com", phone: "+91 90108 00003", priceRange: "₹1400-₹3200" },
      { name: "Dr. Arjun Malhotra", specialty: "Endocrinology", email: "arjun.endo@example.com", phone: "+91 90108 00004", priceRange: "₹1500-₹3300" },
      { name: "Dr. Shweta Iyer", specialty: "Endocrinology", email: "shweta.endo@example.com", phone: "+91 90108 00005", priceRange: "₹1600-₹3400" },
  
      // Infectious Disease (5)
      { name: "Dr. Raj Patel", specialty: "Infectious Disease", email: "raj.id@example.com", phone: "+91 90109 00001", priceRange: "₹800-₹2000" },
      { name: "Dr. Anjali Desai", specialty: "Infectious Disease", email: "anjali.id@example.com", phone: "+91 90109 00002", priceRange: "₹900-₹2100" },
      { name: "Dr. Vikram Singh", specialty: "Infectious Disease", email: "vikram.id@example.com", phone: "+91 90109 00003", priceRange: "₹1000-₹2200" },
      { name: "Dr. Nandini Rao", specialty: "Infectious Disease", email: "nandini.id@example.com", phone: "+91 90109 00004", priceRange: "₹1100-₹2300" },
      { name: "Dr. Priya Reddy", specialty: "Infectious Disease", email: "priya.id@example.com", phone: "+91 90109 00005", priceRange: "₹1200-₹2400" },
  
      // Internal Medicine (5)
      { name: "Dr. Ananya Gupta", specialty: "Internal Medicine", email: "ananya.im@example.com", phone: "+91 90110 00001", priceRange: "₹1000-₹2500" },
      { name: "Dr. Vikram Sharma", specialty: "Internal Medicine", email: "vikram.im@example.com", phone: "+91 90110 00002", priceRange: "₹1100-₹2600" },
      { name: "Dr. Priya Reddy", specialty: "Internal Medicine", email: "priya.im@example.com", phone: "+91 90110 00003", priceRange: "₹1200-₹2700" },
      { name: "Dr. Arjun Kapoor", specialty: "Internal Medicine", email: "arjun.im@example.com", phone: "+91 90110 00004", priceRange: "₹1300-₹2800" },
      { name: "Dr. Shreya Verma", specialty: "Internal Medicine", email: "shreya.im@example.com", phone: "+91 90110 00005", priceRange: "₹1400-₹2900" },
  
      // Oncology (5)
      { name: "Dr. Arjun Malhotra", specialty: "Oncology", email: "arjun.onco@example.com", phone: "+91 90111 00001", priceRange: "₹2000-₹5000" },
      { name: "Dr. Kavita Menon", specialty: "Oncology", email: "kavita.onco@example.com", phone: "+91 90111 00002", priceRange: "₹2500-₹5500" },
      { name: "Dr. Rohit Khanna", specialty: "Oncology", email: "rohit.onco@example.com", phone: "+91 90111 00003", priceRange: "₹3000-₹6000" },
      { name: "Dr. Shalini Bajaj", specialty: "Oncology", email: "shalini.onco@example.com", phone: "+91 90111 00004", priceRange: "₹3500-₹6500" },
      { name: "Dr. Vikram Malhotra", specialty: "Oncology", email: "vikram.onco@example.com", phone: "+91 90111 00005", priceRange: "₹4000-₹7000" },
  
      // Neurology (5)
      { name: "Dr. Kavita Menon", specialty: "Neurology", email: "kavita.neuro@example.com", phone: "+91 90112 00001", priceRange: "₹1800-₹4500" },
      { name: "Dr. Vikram Sharma", specialty: "Neurology", email: "vikram.neuro@example.com", phone: "+91 90112 00002", priceRange: "₹2000-₹4700" },
      { name: "Dr. Priya Nair", specialty: "Neurology", email: "priya.neuro@example.com", phone: "+91 90112 00003", priceRange: "₹2200-₹4900" },
      { name: "Dr. Rajiv Kapoor", specialty: "Neurology", email: "rajiv.neuro@example.com", phone: "+91 90112 00004", priceRange: "₹2400-₹5100" },
      { name: "Dr. Ananya Reddy", specialty: "Neurology", email: "ananya.neuro@example.com", phone: "+91 90112 00005", priceRange: "₹26000-₹5300" }
    ],
  
    "high": [
      // General Practice (5)
      { name: "Dr. Arjun Khanna", specialty: "General Practice", email: "arjun.gp@example.com", phone: "+91 90201 00001", priceRange: "₹2000-₹5000" },
      { name: "Dr. Shalini Bajaj", specialty: "General Practice", email: "shalini.gp@example.com", phone: "+91 90201 00002", priceRange: "₹2500-₹5500" },
      { name: "Dr. Vikram Malhotra", specialty: "General Practice", email: "vikram.gp@example.com", phone: "+91 90201 00003", priceRange: "₹3000-₹6000" },
      { name: "Dr. Ananya Reddy", specialty: "General Practice", email: "ananya.gp@example.com", phone: "+91 90201 00004", priceRange: "₹3500-₹6500" },
      { name: "Dr. Rajiv Kapoor", specialty: "General Practice", email: "rajiv.gp@example.com", phone: "+91 90201 00005", priceRange: "₹4000-₹7000" },
  
      // Dermatology (5)
      { name: "Dr. Nandini Reddy", specialty: "Dermatology", email: "nandini.derm@example.com", phone: "+91 90202 00001", priceRange: "₹2500-₹7000" },
      { name: "Dr. Arjun Malhotra", specialty: "Dermatology", email: "arjun.derm@example.com", phone: "+91 90202 00002", priceRange: "₹3000-₹7500" },
      { name: "Dr. Kavita Menon", specialty: "Dermatology", email: "kavita.derm@example.com", phone: "+91 90202 00003", priceRange: "₹3500-₹8000" },
      { name: "Dr. Rohit Khanna", specialty: "Dermatology", email: "rohit.derm@example.com", phone: "+91 90202 00004", priceRange: "₹4000-₹8500" },
      { name: "Dr. Shalini Bajaj", specialty: "Dermatology", email: "shalini.derm@example.com", phone: "+91 90202 00005", priceRange: "₹4500-₹9000" },
  
      // Gastroenterology (5)
      { name: "Dr. Vikram Malhotra", specialty: "Gastroenterology", email: "vikram.gastro@example.com", phone: "+91 90203 00001", priceRange: "₹3000-₹8000" },
      { name: "Dr. Ananya Reddy", specialty: "Gastroenterology", email: "ananya.gastro@example.com", phone: "+91 90203 00002", priceRange: "₹3500-₹8500" },
      { name: "Dr. Rajiv Kapoor", specialty: "Gastroenterology", email: "rajiv.gastro@example.com", phone: "+91 90203 00003", priceRange: "₹4000-₹9000" },
      { name: "Dr. Priya Nair", specialty: "Gastroenterology", email: "priya.gastro@example.com", phone: "+91 90203 00004", priceRange: "₹4500-₹9500" },
      { name: "Dr. Rohit Sharma", specialty: "Gastroenterology", email: "rohit.gastro@example.com", phone: "+91 90203 00005", priceRange: "₹5000-₹10000" },
  
      // Pulmonology (5)
      { name: "Dr. Rohit Khanna", specialty: "Pulmonology", email: "rohit.pulmo@example.com", phone: "+91 90204 00001", priceRange: "₹3500-₹8500" },
      { name: "Dr. Shalini Bajaj", specialty: "Pulmonology", email: "shalini.pulmo@example.com", phone: "+91 90204 00002", priceRange: "₹4000-₹9000" },
      { name: "Dr. Vikram Malhotra", specialty: "Pulmonology", email: "vikram.pulmo@example.com", phone: "+91 90204 00003", priceRange: "₹4500-₹9500" },
      { name: "Dr. Ananya Reddy", specialty: "Pulmonology", email: "ananya.pulmo@example.com", phone: "+91 90204 00004", priceRange: "₹5000-₹10000" },
      { name: "Dr. Rajiv Kapoor", specialty: "Pulmonology", email: "rajiv.pulmo@example.com", phone: "+91 90204 00005", priceRange: "₹5500-₹10500" },
  
      // ENT (5)
      { name: "Dr. Kavita Menon", specialty: "ENT", email: "kavita.ent@example.com", phone: "+91 90205 00001", priceRange: "₹3000-₹7500" },
      { name: "Dr. Vikram Sharma", specialty: "ENT", email: "vikram.ent@example.com", phone: "+91 90205 00002", priceRange: "₹3500-₹8000" },
      { name: "Dr. Priya Nair", specialty: "ENT", email: "priya.ent@example.com", phone: "+91 90205 00003", priceRange: "₹4000-₹8500" },
      { name: "Dr. Rajiv Kapoor", specialty: "ENT", email: "rajiv.ent@example.com", phone: "+91 90205 00004", priceRange: "₹4500-₹9000" },
      { name: "Dr. Ananya Reddy", specialty: "ENT", email: "ananya.ent@example.com", phone: "+91 90205 00005", priceRange: "₹5000-₹9500" },
  
      // Ophthalmology (5)
      { name: "Dr. Arjun Malhotra", specialty: "Ophthalmology", email: "arjun.oph@example.com", phone: "+91 90206 00001", priceRange: "₹3500-₹8000" },
      { name: "Dr. Kavita Menon", specialty: "Ophthalmology", email: "kavita.oph@example.com", phone: "+91 90206 00002", priceRange: "₹4000-₹8500" },
      { name: "Dr. Rohit Khanna", specialty: "Ophthalmology", email: "rohit.oph@example.com", phone: "+91 90206 00003", priceRange: "₹4500-₹9000" },
      { name: "Dr. Shalini Bajaj", specialty: "Ophthalmology", email: "shalini.oph@example.com", phone: "+91 90206 00004", priceRange: "₹5000-₹9500" },
      { name: "Dr. Vikram Malhotra", specialty: "Ophthalmology", email: "vikram.oph@example.com", phone: "+91 90206 00004", priceRange: "₹9000-₹12500" },
      {
        name: "Dr. Harish Trivedi",
        specialty: "Oncology",
        email: "htrivedi@premiumonco.com",
        phone: "+91 99000 55551",
        priceRange: "₹25000000-35000000",
        treatments: ["Stem Cell Transplant", "Proton Therapy", "Immunotherapy"]
      },
      {
        name: "Dr. Aisha Rahman",
        specialty: "Oncology",
        email: "arahman@genetherapy.com",
        phone: "+91 99000 55552",
        priceRange: "₹30000000-40000000", 
        treatments: ["Gene Therapy", "CAR-T Cell Therapy"]
      },
  
      // Neurology (Multiple Sclerosis)
      {
        name: "Dr. Vikramaditya Singh",
        specialty: "Neurology",
        email: "v.singh@neurorestore.com",
        phone: "+91 99000 55553",
        priceRange: "₹22000000-30000000",
        treatments: ["Stem Cell Neural Repair", "Advanced Neurorehabilitation"]
      },
  
      // Rare Diseases
      {
        name: "Dr. Nalini Mehta",
        specialty: "Rare Disease Specialist",
        email: "n.mehta@rarediseases.com",
        phone: "+91 99000 55554",
        priceRange: "₹40000000-60000000",
        treatments: ["Enzyme Replacement Therapy", "Custom Drug Development"] 
      },
  
      // Infectious Disease (HIV/AIDS)
      {
        name: "Dr. Rajeshwari Kapoor",
        specialty: "Infectious Disease",
        email: "rkapoor@hivspecialist.com",
        phone: "+91 99000 55555",
        priceRange: "₹20000000-28000000",
        treatments: ["Experimental ARVs", "Therapeutic Vaccines"]
      }
    ]
};
// Determine tier based on budget
export const getTier = (budget) => {
  if (budget < 500) return "low";
  if (budget < 2000) return "medium";
  return "high";
};
