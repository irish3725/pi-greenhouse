import React from 'react';
import './Stats.css';

class Temp extends React.Component {
/*
  constructor(props) {
    super(props);
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
*/

  render() {
    return (
      <div className='single-stat'>
        <p>Temperature: {this.props.currentTemp} {'\u00B0'}F</p>
      </div>
    );
  };
}; 

class Humidity extends React.Component {
/*
  constructor() {
    super();
    this.state = {currentHumidity: '?'};
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
*/

  render() {
    return (
      <div className='single-stat'>
        <p>Humidity: {this.props.currentHumidity} %</p>
      </div>
    );
  };
};

class Fan extends React.Component {
/*
  constructor() {
    super();
    this.state = {currentFanPower: '?'};
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
*/

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
      {console.log('Stat\'s state: ', this.state.stats)}
      <Temp currentTemp = {parseFloat(this.state.stats.temperature).toFixed(2)}/>
      <Humidity currentHumidity = {parseFloat(this.state.stats.humidity).toFixed(2)}/>
      <Fan currentFanPower = {parseFloat(this.state.stats.fan_power).toFixed()}/>
    </div>
  };
}

export default Stats;
