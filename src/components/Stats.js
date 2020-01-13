import React from 'react';
import './Stats.css';

const Temp = () => {
  return (
    <div className='single-stat'>
      <p>Temperature: 69</p>
    </div>
  );
}; 

const Humidity = () => {
  return (
    <div className='single-stat'>
      <p>Humidity: 72%</p>
    </div>
  );
}; 

const Fan = () => {
  return (
    <div className='single-stat'>
      <p>Fan on</p>
    </div>
  );
}; 

class Stats extends React.Component {

  render() {
    return <div className='stats-container'>
      <Temp />
      <Humidity />
      <Fan />
    </div>
  }
}

export default Stats;
