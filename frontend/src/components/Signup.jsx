import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emergencyNumber, setEmergencyNumber] = useState(""); // Emergency number for patients
    const [email, setEmail] = useState("");
    const [specialization, setSpecialization] = useState(""); // For doctors
    const [insurance, setInsurance] = useState(""); // For patients

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (role === "patient") {
            // Redirect to symptom selection page if the role is patient
            navigate("/symptom-selection")
        } else {
            // Handle signup logic for doctors
            console.log("Doctor Signup Details:", {
                name,
                age,
                gender,
                city,
                phoneNumber,
                emergencyNumber,
                email,
                specialization
            });
            alert("Doctor signup successful!");
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <div className="role-selection">
                <label>
                    <input
                        type="radio"
                        value="doctor"
                        checked={role === "doctor"}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Doctor
                </label>
                <label>
                    <input
                        type="radio"
                        value="patient"
                        checked={role === "patient"}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Patient
                </label>
            </div>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Emergency Number:</label>
                    <input
                        type="tel"
                        value={emergencyNumber}
                        onChange={(e) => setEmergencyNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Doctor-specific field */}
                {role === "doctor" && (
                    <div className="form-group">
                        <label>Specialization:</label>
                        <input
                            type="text"
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                            required
                        />
                    </div>
                )}

                {/* Patient-specific field */}
                {role === "patient" && (
                    <div className="form-group">
                        <label>Insurance Provider:</label>
                        <input
                            type="text"
                            value={insurance}
                            onChange={(e) => setInsurance(e.target.value)}
                            required
                        />
                    </div>
                )}

                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default Signup;
