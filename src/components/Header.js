import React from 'react';
import logo from '../clover.png';
import './Header.css';

/* informational banner */
class Banner extends React.Component {
  render() {
    return <div className='banner'>
      <p>No connection to pi-greenhouse database.</p>
    </div>
  };
};

/* navigation bar */
class NavBar extends React.Component {
  render() {
    return <div className='nav-bar'>
      <img src={logo} className='logo' alt='logo' />
      <a href='/'>pi-greenhouse</a>
    </div>
  };
};
 

/* header */
class Header extends React.Component {
  render() {
    return <header>
      <NavBar />
    </header>
  };
};

export default Header;
