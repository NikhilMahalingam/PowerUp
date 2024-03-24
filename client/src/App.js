import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    goals: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

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
    alert(data.message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} /><br />
          <input type="number" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} /><br />
          <input type="text" name="goals" placeholder="Goals" value={formData.goals} onChange={handleChange} /><br />
          <input type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} /><br />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
