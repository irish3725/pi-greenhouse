import React from 'react';
import './Stats.css';

class Temp extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTemp: -459.67,
    };
  };

  componentDidMount() {
      fetch("http://localhost:5000/temperature", {
        credentials: 'same-origin',
      })
      .then(res => res.json())
      .then(res => res[0].temperature) // set res to temperature in first row (query only returns one row)
      .then(res => this.setState({currentTemp: res })) // set state to temperature
      .catch(function(error) {
        console.log('error: \n', error);
      });
  };

  render() {
    return (
      <div className='single-stat'>
        <p>Temperature: {this.state.currentTemp} {'\u00B0'}F</p>
      </div>
    );
  };
}; 

class Humidity extends React.Component {
  constructor() {
    super();
    this.state = {currentHumidity: -1};
  };

  componentDidMount() {
      fetch("http://localhost:5000/Humidity", {
        credentials: 'same-origin',
      })
      .then(res => res.json())
      .then(res => res[0].humidity) // set res to temperature in first row (query only returns one row)
      .then(res => this.setState({currentHumidity: res })) // set state to temperature
      .catch(function(error) {
        console.log('error: \n', error);
      });
  };

  render() {
    return (
      <div className='single-stat'>
        <p>Humidity: {this.state.currentHumidity} %</p>
      </div>
    );
  };
};

class Fan extends React.Component {
  constructor() {
    super();
    this.state = {currentFanPower: -1};
  }

  componentDidMount() {
      fetch("http://localhost:5000/fan_power", {
        credentials: 'same-origin',
      })
      .then(res => res.json())
      .then(res => res[0].fan_power) // set res to temperature in first row (query only returns one row)
      .then(res => this.setState({currentFanPower: res })) // set state to temperature
      .catch(function(error) {
        console.log('error: \n', error);
      });
  };

  render() {
    return (
      <div className='single-stat'>
        <p>Fan Power: {this.state.currentFanPower} %</p>
      </div>
    );
  };
}; 

class Stats extends React.Component {
  render() {
    return <div className='stats-container'>
      <Temp />
      <Humidity />
      <Fan />
    </div>
  };
}

export default Stats;
