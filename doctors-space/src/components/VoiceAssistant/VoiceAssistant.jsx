import { useEffect, useState } from 'react';
import './VoiceAssistant.css';

const VoiceAssistant = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const triggerSpeech = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Welcome to Doctors space. How may I help you";
    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 1;
    
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.includes('en') && voice.name.includes('Female')
    );
    if (preferredVoice) {
      speech.voice = preferredVoice;
    }

    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    speech.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = triggerSpeech;
      } else {
        setTimeout(triggerSpeech, 1000);
      }
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="voice-assistant">
      <button 
        onClick={() => {
          window.speechSynthesis.cancel();
          triggerSpeech();
        }}
        disabled={isSpeaking}
      >
        {isSpeaking ? 'Speaking...' : 'Repeat Greeting'}
      </button>
    </div>
  );
};

export default VoiceAssistant;
