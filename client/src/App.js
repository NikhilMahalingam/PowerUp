import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import Home from './Home';
import Goals from './Goals';

function App() {

  return (
    <div className="App">
      <Router>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/Goals">Goals</Link>
      </nav>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Goals" element={<Goals />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
