import sklearn
import numpy as np
import pandas as pd
import pickle
import joblib
import os
from flask import Flask, request, render_template, jsonify
from collections import defaultdict
from textblob import TextBlob
from langchain.tools import tool
from langchain.agents import AgentType, initialize_agent
from langchain.llms import OpenAI

# flask app
app = Flask(__name__)

# load datasets for disease prediction
import os
base_dir = os.path.dirname(os.path.abspath(__file__))
sym_des = pd.read_csv(os.path.join(base_dir, "dataset/symtoms_df.csv"))
precautions = pd.read_csv(os.path.join(base_dir, "dataset/precautions_df.csv"))
workout = pd.read_csv(os.path.join(base_dir, "dataset/workout_df.csv"))
description = pd.read_csv(os.path.join(base_dir, "dataset/description.csv"))
medications = pd.read_csv(os.path.join(base_dir, "dataset/medications.csv"))
diets = pd.read_csv(os.path.join(base_dir, "dataset/diets.csv"))

# load disease prediction model
svc = pickle.load(open(os.path.join(base_dir, 'models/svc.pkl'),'rb'))

# load medication recommendation models
med_model = joblib.load(os.path.join(base_dir, 'models/medication_model.pkl'))
dosage_model = joblib.load(os.path.join(base_dir, 'models/dosage_model.pkl'))
duration_model = joblib.load(os.path.join(base_dir, 'models/duration_model.pkl'))
effectiveness_model = joblib.load(os.path.join(base_dir, 'models/effectiveness_model.pkl'))
reactions_model = joblib.load(os.path.join(base_dir, 'models/reactions_model.pkl'))
recovery_model = joblib.load(os.path.join(base_dir, 'models/recovery_model.pkl'))

#============================================================
# Custom and helper functions
#==========================helper functions================

def helper(dis):
    desc = description[description['Disease'] == dis]['Description']
    desc = " ".join([w for w in desc])

    pre = precautions[precautions['Disease'] == dis][['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']]
    pre = [col for col in pre.values]

    med = medications[medications['Disease'] == dis]['Medication']
    med = [med for med in med.values]

    die = diets[diets['Disease'] == dis]['Diet']
    die = [die for die in die.values]

    wrkout = workout[workout['disease'] == dis]['workout']

    return desc, pre, med, die, wrkout

symptoms_dict = {'itching': 0, 'skin_rash': 1, 'nodal_skin_eruptions': 2, 'continuous_sneezing': 3, 'shivering': 4, 'chills': 5, 'joint_pain': 6, 'stomach_pain': 7, 'acidity': 8, 'ulcers_on_tongue': 9, 'muscle_wasting': 10, 'vomiting': 11, 'burning_micturition': 12, 'spotting_urination': 13, 'fatigue': 14, 'weight_gain': 15, 'anxiety': 16, 'cold_hands_and_feets': 17, 'mood_swings': 18, 'weight_loss': 19, 'restlessness': 20, 'lethargy': 21, 'patches_in_throat': 22, 'irregular_sugar_level': 23, 'cough': 24, 'high_fever': 25, 'sunken_eyes': 26, 'breathlessness': 27, 'sweating': 28, 'dehydration': 29, 'indigestion': 30, 'headache': 31, 'yellowish_skin': 32, 'dark_urine': 33, 'nausea': 34, 'loss_of_appetite': 35, 'pain_behind_the_eyes': 36, 'back_pain': 37, 'constipation': 38, 'abdominal_pain': 39, 'diarrhoea': 40, 'mild_fever': 41, 'yellow_urine': 42, 'yellowing_of_eyes': 43, 'acute_liver_failure': 44, 'fluid_overload': 45, 'swelling_of_stomach': 46, 'swelled_lymph_nodes': 47, 'malaise': 48, 'blurred_and_distorted_vision': 49, 'phlegm': 50, 'throat_irritation': 51, 'redness_of_eyes': 52, 'sinus_pressure': 53, 'runny_nose': 54, 'congestion': 55, 'chest_pain': 56, 'weakness_in_limbs': 57, 'fast_heart_rate': 58, 'pain_during_bowel_movements': 59, 'pain_in_anal_region': 60, 'bloody_stool': 61, 'irritation_in_anus': 62, 'neck_pain': 63, 'dizziness': 64, 'cramps': 65, 'bruising': 66, 'obesity': 67, 'swollen_legs': 68, 'swollen_blood_vessels': 69, 'puffy_face_and_eyes': 70, 'enlarged_thyroid': 71, 'brittle_nails': 72, 'swollen_extremeties': 73, 'excessive_hunger': 74, 'extra_marital_contacts': 75, 'drying_and_tingling_lips': 76, 'slurred_speech': 77, 'knee_pain': 78, 'hip_joint_pain': 79, 'muscle_weakness': 80, 'stiff_neck': 81, 'swelling_joints': 82, 'movement_stiffness': 83, 'spinning_movements': 84, 'loss_of_balance': 85, 'unsteadiness': 86, 'weakness_of_one_body_side': 87, 'loss_of_smell': 88, 'bladder_discomfort': 89, 'foul_smell_of urine': 90, 'continuous_feel_of_urine': 91, 'passage_of_gases': 92, 'internal_itching': 93, 'toxic_look_(typhos)': 94, 'depression': 95, 'irritability': 96, 'muscle_pain': 97, 'altered_sensorium': 98, 'red_spots_over_body': 99, 'belly_pain': 100, 'abnormal_menstruation': 101, 'dischromic _patches': 102, 'watering_from_eyes': 103, 'increased_appetite': 104, 'polyuria': 105, 'family_history': 106, 'mucoid_sputum': 107, 'rusty_sputum': 108, 'lack_of_concentration': 109, 'visual_disturbances': 110, 'receiving_blood_transfusion': 111, 'receiving_unsterile_injections': 112, 'coma': 113, 'stomach_bleeding': 114, 'distention_of_abdomen': 115, 'history_of_alcohol_consumption': 116, 'fluid_overload.1': 117, 'blood_in_sputum': 118, 'prominent_veins_on_calf': 119, 'palpitations': 120, 'painful_walking': 121, 'pus_filled_pimples': 122, 'blackheads': 123, 'scurring': 124, 'skin_peeling': 125, 'silver_like_dusting': 126, 'small_dents_in_nails': 127, 'inflammatory_nails': 128, 'blister': 129, 'red_sore_around_nose': 130, 'yellow_crust_ooze': 131}
diseases_list = {15: 'Fungal infection', 4: 'Allergy', 16: 'GERD', 9: 'Chronic cholestasis', 14: 'Drug Reaction', 33: 'Peptic ulcer diseae', 1: 'AIDS', 12: 'Diabetes ', 17: 'Gastroenteritis', 6: 'Bronchial Asthma', 23: 'Hypertension ', 30: 'Migraine', 7: 'Cervical spondylosis', 32: 'Paralysis (brain hemorrhage)', 28: 'Jaundice', 29: 'Malaria', 8: 'Chicken pox', 11: 'Dengue', 37: 'Typhoid', 40: 'hepatitis A', 19: 'Hepatitis B', 20: 'Hepatitis C', 21: 'Hepatitis D', 22: 'Hepatitis E', 3: 'Alcoholic hepatitis', 36: 'Tuberculosis', 10: 'Common Cold', 34: 'Pneumonia', 13: 'Dimorphic hemmorhoids(piles)', 18: 'Heart attack', 39: 'Varicose veins', 26: 'Hypothyroidism', 24: 'Hyperthyroidism', 25: 'Hypoglycemia', 31: 'Osteoarthristis', 5: 'Arthritis', 0: '(vertigo) Paroymsal  Positional Vertigo', 2: 'Acne', 38: 'Urinary tract infection', 35: 'Psoriasis', 27: 'Impetigo'}

# Initialize the TextBlob object for spelling correction
def correct_spelling(symptom):
    blob = TextBlob(symptom)
    return str(blob.correct())

symptom_mapping = defaultdict(lambda: "unknown", {
    "itching": ["itching"],
    "skin_rash": ["skin rash", "rash", "dermatitis"],
    # ... [rest of the symptom mapping dictionary] ...
})

# Disease Prediction function
def get_predicted_value(patient_symptoms):
    input_vector = np.zeros(len(symptoms_dict))
    
    for item in patient_symptoms:
        corrected_item = item
        index = symptoms_dict.get(corrected_item, -1)
        
        if index != -1:
            input_vector[index] = 1
        else:
            found = False
            for key, synonyms in symptom_mapping.items():
                if item in synonyms:
                    index = symptoms_dict.get(key, -1)
                    if index != -1:
                        input_vector[index] = 1
                        found = True
                        break
            
            if not found:
                corrected_item = correct_spelling(item)
                index = symptoms_dict.get(corrected_item, -1)
                
                if index != -1:
                    input_vector[index] = 1
                else:
                    for key, synonyms in symptom_mapping.items():
                        if corrected_item in synonyms:
                            index = symptoms_dict.get(key, -1)
                            if index != -1:
                                input_vector[index] = 1
                                found = True
                                break
                    if not found:
                        print(f"Warning: Symptom '{item}' with corrected spelling '{corrected_item}' is not in the symptoms dictionary or mapping")
    
    predicted_disease_index = svc.predict([input_vector])[0]
    return diseases_list[predicted_disease_index]

# Medication Recommendation function
def get_medication_recommendation(input_data):
    result = {
        'medication': med_model.predict(input_data)[0],
        'dosage': dosage_model.predict(input_data)[0],
        'duration': duration_model.predict(input_data)[0],
        'effectiveness': effectiveness_model.predict(input_data)[0],
        'reactions': reactions_model.predict(input_data)[0],
        'recovery_time': recovery_model.predict(input_data)[0]
    }
    return result

# Wrapper functions for LLM integration
@tool
def predict_disease_tool(symptoms: str) -> str:
    """Predicts disease based on symptoms. Input should be comma-separated symptoms."""
    symptoms_list = [s.strip() for s in symptoms.split(',')]
    return get_predicted_value(symptoms_list)

@tool  
def recommend_medication_tool(patient_data: dict) -> dict:
    """Recommends medication based on patient data. Input should be dictionary with:
    age, gender, weight, height, chronic_conditions, allergies, genetic_disorders, diagnosis, symptoms"""
    input_df = pd.DataFrame([patient_data])
    return get_medication_recommendation(input_df)

# Initialize LLM agent
llm = OpenAI(temperature=0)
tools = [predict_disease_tool, recommend_medication_tool]
agent = initialize_agent(tools, llm, agent=AgentType.OPENAI_FUNCTIONS, verbose=True)

# New API endpoints for LLM integration
@app.route('/api/predict_disease', methods=['POST'])
def api_predict_disease():
    data = request.get_json()
    symptoms = data.get('symptoms', '')
    return jsonify({'disease': predict_disease_tool(symptoms)})

@app.route('/api/predict_medication', methods=['POST'])  
def api_predict_medication():
    data = request.get_json()
    return jsonify(recommend_medication_tool(data))

# creating routes========================================

@app.route("/")
def index():
    return render_template("index.html")

# Disease Prediction Route
@app.route('/predict_disease', methods=['POST'])
def predict_disease():
    if request.method == 'POST':
        name = request.form.get('name')
        age = request.form.get('age')
        location = request.form.get('location')
        symptoms = request.form.get('symptoms')
        
        if symptoms == "Symptoms":
            message = "Please either write symptoms or you have written misspelled symptoms"
            return render_template('index.html', message=message)
        
        if not symptoms:
            message = "Please enter symptoms."
            return render_template('index.html', message=message) 
        else:
            user_symptoms = [s.strip() for s in symptoms.split(',')]
            user_symptoms = [symptom.strip("[]' ") for symptom in user_symptoms]
            predicted_disease = get_predicted_value(user_symptoms)
            dis_des, precautions, medications, rec_diet, workout = helper(predicted_disease)

            my_precautions = []
            for i in precautions:
                my_precautions.append(i)

            return render_template('index.html', 
                                 name=name, 
                                 age=age, 
                                 location=location, 
                                 symptoms=symptoms,  
                                 predicted_disease=predicted_disease, 
                                 dis_des=dis_des,
                                 my_precautions=my_precautions[0], 
                                 medications=medications, 
                                 my_diet=rec_diet,
                                 workout=workout)

# Medication Recommendation Route
@app.route('/predict_medication', methods=['POST'])
def predict_medication():
    if request.method == 'POST':
        # Get user input
        age = int(request.form['age'])
        gender = request.form['gender']
        weight = float(request.form['weight'])
        height = float(request.form['height'])
        chronic = request.form['chronic']
        allergies = request.form['allergies']
        genetic = request.form['genetic']
        diagnosis = request.form['diagnosis']
        symptoms = request.form['symptoms']

        # Prepare input as DataFrame
        input_data = pd.DataFrame([{
            'Age': age,
            'Gender': gender,
            'Weight_kg': weight,
            'Height_cm': height,
            'Chronic_Conditions': chronic,
            'Drug_Allergies': allergies,
            'Genetic_Disorders': genetic,
            'Diagnosis': diagnosis,
            'Symptoms': symptoms
        }])

        # Get medication recommendation
        medication_result = get_medication_recommendation(input_data)

        return render_template('index.html', medication_result=medication_result)

# Additional routes
@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/developer')
def developer():
    return render_template("developer.html")

@app.route('/blog')
def blog():
    return render_template("blog.html")

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    return render_template("upload.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Render sets the PORT env variable
    app.run(host="0.0.0.0", port=port)
