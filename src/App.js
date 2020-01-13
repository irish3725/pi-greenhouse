import React from 'react';
import logo from './clover.png';
import './App.css';

import NavBar from './components/NavBar';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='pi-greenhouse-page'>
        <Stats />
      </div>
    </div>
  );
}

export default App;
