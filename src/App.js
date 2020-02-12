import React from 'react';
import './App.css';

import Header from './components/Header';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='pi-greenhouse-page'>
        <Stats />
      </div>
    </div>
  );
}

export default App;
