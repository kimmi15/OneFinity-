import React, { useState } from 'react';
import './App.css';
import SpeechRecognition from 'react-speech-recognition';
import axios from 'axios';
const App = ({ transcript, resetTranscript, startListening, stopListening }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    state: '',
    district: '',
    village: '',
    panNumber: '',
    aadhaarNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Send formData to your server for persistence
      await axios.post('YOUR_API_ENDPOINT', formData);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Voice Recognition Form</h1>
      <div className="form">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="State"
        />
        <input
          type="text"
          name="district"
          value={formData.district}
          onChange={handleInputChange}
          placeholder="District"
        />
        <input
          type="text"
          name="village"
          value={formData.village}
          onChange={handleInputChange}
          placeholder="Village"
        />
        <input
          type="text"
          name="panNumber"
          value={formData.panNumber}
          onChange={handleInputChange}
          placeholder="PAN Number"
        />
        <input
          type="text"
          name="aadhaarNumber"
          value={formData.aadhaarNumber}
          onChange={handleInputChange}
          placeholder="Aadhaar Number"
        />
      </div>

      <button onClick={startListening}>Start Recording</button>
      <button onClick={() => { stopListening(); resetTranscript(); }}>Stop Recording</button>

      <div className="transcript">
        <h2>Transcribed Text:</h2>
        <p>{transcript}</p>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
  
};

export default SpeechRecognition(options)(App);