import React from 'react';
import './Home.css'
import './components/Navbar'
import Navbar from './components/Navbar';

function Home() {
  return (
    <><div className="home-container"></div><div>
      <Navbar></Navbar>
      <h1>Welcome to the Home Page!</h1>
    </div></>
  );
}

export default Home;