import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="topnav">
        <i className="ri-football-line text-white mr-2">TheScoreHub</i>
        <button onClick={toggleMenu} className="menu-button">
          <i className="ri-menu-3-line"></i>
        </button>
      </div>
      <div className={`menu-content ${menuOpen ? 'active' : ''}`}>
        <nav>
          <h1>
            <i className="ri-football-line text-white mr-2"></i>
            TheScoreHub
          </h1>
          <Link to="/india">
            <i className="ri-football-line"></i> AFC
          </Link>
          <Link to="/friendlies">
            <i className="ri-information-line"></i> PREMIER LEAGUE
          </Link>
          <Link to="/ucl">
            <i className="ri-gamepad-line"></i> UCL
          </Link>
          <Link to="/uel">
            <i className="ri-basketball-line"></i> UEL
          </Link>
          <Link to="/clubinfo">
            <i className="ri-golf-ball-line"></i> LALIGA
          </Link>
          <Link to="/indiansportsnews">
            <i className="ri-golf-ball-line"></i> OTHER ALL LEAGUES
          </Link>
          <Link to="/about">
            <i className="ri-live-line"></i> ABOUT
          </Link>
          <hr />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
