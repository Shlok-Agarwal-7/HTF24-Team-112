import React, { useState } from 'react';

const SymptomSelection = () => {
  const [symptoms, setSymptoms] = useState({
    nausea: 'low',
    headaches: 'low',
    fever: 'low',
    bodyPains: 'low',
    breathlessness: 'low',
    description: '',
  });

  const handleSymptomChange = (e) => {
    const { name, value } = e.target;
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      description: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Symptoms:', symptoms);
    alert('Symptoms submitted!'); // Replace with desired functionality
  };

  return (
    <div style={styles.container}>
      <h2>Select Your Symptoms</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {['nausea', 'headaches', 'fever', 'bodyPains', 'breathlessness'].map((symptom) => (
          <div key={symptom} style={styles.symptomSection}>
            <label>{symptom.charAt(0).toUpperCase() + symptom.slice(1)}:</label>
            <select
              name={symptom}
              value={symptoms[symptom]}
              onChange={handleSymptomChange}
              style={styles.select}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        ))}
        <div style={styles.symptomSection}>
          <label>Descriptive Answer:</label>
          <textarea
            name="description"
            value={symptoms.description}
            onChange={handleDescriptionChange}
            style={styles.textarea}
            placeholder="Describe your symptoms here..."
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  symptomSection: {
    marginBottom: '15px',
  },
  select: {
    marginLeft: '10px',
    padding: '5px',
  },
  textarea: {
    width: '100%',
    height: '60px',
    marginTop: '10px',
    padding: '8px',
  },
  submitButton: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default SymptomSelection;
