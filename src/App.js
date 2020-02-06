import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div className='pi-greenhouse-page'>
        <Stats />
      </div>
    </div>
  );
}

export default App;
