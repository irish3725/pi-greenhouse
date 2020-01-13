import React from 'react';
import logo from '../clover.png';
import './NavBar.css';

class NavBar extends React.Component {

  render() {
    return <header className="pi-greenhouse-header">
      <img src={logo} className="pi-greenhouse-logo" alt="logo" />
      <a href="/">pi-greenhouse</a>
    </header>
  };
}

export default NavBar;
