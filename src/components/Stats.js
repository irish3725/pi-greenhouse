import React from 'react';
import './Stats.css';

/* for formatting number outputs and ignoring strings */
function formatNumber(num, precision) {

  /* return string if it is not a number */
  if(isNaN(num)) {
    return num
  }

  num = parseFloat(num)
  var numberOfDecimals;

  if (Math.floor(num) !== num) {
    /* count number of digits to the right of the decimal */
    numberOfDecimals = num.toString().split(".")[1].length || 0 
  } else {
    /* if floor matches number, no digits right of decimal */
    numberOfDecimals = 0
  }

  /* return number formatted to lowest of numberOfDecimals and inputted precision */
  return parseFloat(num).toFixed(Math.min(precision, numberOfDecimals))
}

class Temp extends React.Component {
  render() {
    return (
      <div className='single-stat'>
        <p>Temperature: {this.props.currentTemp} {'\u00B0'}F</p>
      </div>
    );
  };
}; 

class Humidity extends React.Component {
  render() {
    return (
      <div className='single-stat'>
        <p>Humidity: {this.props.currentHumidity} %</p>
      </div>
    );
  };
};

class Fan extends React.Component {
  render() {
    return (
      <div className='single-stat'>
        <p>Fan Power: {this.props.currentFanPower} %</p>
      </div>
    );
  };
}; 

class Stats extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: {temperature: '??', humidity: '??', fan_power: '??', timestamp: '??'}
    }
  } 

  componentDidMount() {
      fetch("http://localhost:5000/stats/1", {
        credentials: 'same-origin',
      })
      .then(res => res.json()) // sets res to a list of rows. (first request asks for 1 row)
      .then(res => res[0]) // set res to first 
      .then(res => this.setState({stats: res })) // set state to temperature
      .catch(function(error) {
        console.log('error: \n', error);
      });
  };

  render() {
    // values read from json default to strings. parseFloat gets floats
    return <div className='stats-container'>
      <Temp currentTemp = {formatNumber(this.state.stats.temperature, 2)}/>
      <Humidity currentHumidity = {formatNumber(this.state.stats.humidity, 2)}/>
      <Fan currentFanPower = {formatNumber(this.state.stats.fan_power, 0)}/>
    </div>
  };
}

export default Stats;
