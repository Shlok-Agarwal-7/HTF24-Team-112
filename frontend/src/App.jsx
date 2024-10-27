import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import SymptomSelection from './components/Symptomselection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/symptom-selection" element={<SymptomSelection/>}/>
      </Routes>
    </Router>
  );
};

export default App;
