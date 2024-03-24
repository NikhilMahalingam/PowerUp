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
import Create from './Create';
import Track from './Track';
import Emoji from './Emoji';


function App() {

  return (
    <div className="App">
      <Emoji />
      <Router>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/Goals">Goals</Link>
          <Link to="/Create">Create</Link>
          <Link to="/Track">Track</Link>
      </nav>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Goals" element={<Goals />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Track" element={<Track />} />

        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
