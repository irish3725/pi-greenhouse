import React from 'react';
import './Stats.css';

//import API from './DatabaseAPI.js';



class Temp extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTemp: -459.67,
    };
  };

  componentDidMount() {
    fetch('/Temp')
    .then(results => {
        return results.json();
      }).then(data => {
        let currentTemp = data.map((temp) => {
        return(
          <div key={temp.results}>
            <p> temp.temperature </p>
          </div>
        );
      });
      this.setState({currentTemp: currentTemp})
      console.log("state", this.state.currentTemp);
    });
      
  };

  render() {
    return (
      <div className='single-stat'>
        <p>Temperature: {this.state.currentTemp}{'\u00B0'}F</p>
      </div>
    );
  };
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
  constructor() {
    super();
  };

  render() {
    return <div className='stats-container'>
      <Temp />
      <Humidity />
      <Fan />
    </div>
  };
}

export default Stats;
