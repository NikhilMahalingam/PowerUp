import React, { useState } from 'react';
import './Goals.css';

function Goals() {
    const [formData, setFormData] = useState({
        age: '',
        weight: '',
        goals: '',
        experience: '',
        bodyPart: '' // For rehabilitation specific body part
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [apiResponse, setApiResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        setApiResponse(data.message);  // Store the API response
    };

    return (
        <div>
            <header className="App-header">
                <form onSubmit={handleSubmit}>
                    <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} /><br />
                    <input type="number" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} /><br />
                    
                    <select name="goals" value={formData.goals} onChange={handleChange}>
                        <option value="">Select Goal</option>
                        <option value="Lose weight">Lose weight</option>
                        <option value="Build muscle">Build muscle</option>
                        <option value="Rehabilitation">Rehabilitation</option>
                    </select><br />

                    {formData.goals === 'Rehabilitation' && (
                        <input 
                            type="text" 
                            name="bodyPart" 
                            placeholder="Which Part?" 
                            value={formData.bodyPart} 
                            onChange={handleChange} 
                        />
                    )}
                    
                    <select name="experience" value={formData.experience} onChange={handleChange}>
                        <option value="">Select Experience</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select><br />
                    
                    <button type="submit">Submit</button>
                </form>
                <div className="response-box">
                    {apiResponse}
                </div>
            </header>
        </div>
    );
}

export default Goals;
