import profilePic from '../images/impostor.jpg'
import React from 'react';
import {
  Link
} from "react-router-dom";

const Header = () => {

  const handleClick = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('navigation-active');
  }
  const handleRouteChange = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('navigation-active');
  }

  return (
    <header>
        <div className="header-wrapper">
          <button className="hamburger" onClick={handleClick}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className="navigation">
            <ul className="navigation-list">
              <li className="navigation-item">
                <Link to="/" onClick={handleRouteChange}>Home</Link>
              </li>
              <li className="navigation-item">
                <Link to="/kalkulator" onClick={handleRouteChange}>Kalkulatory</Link>
              </li>
              <li className="navigation-item">
                <Link to="/minecraft" onClick={handleRouteChange}>Serwer Minecraft</Link>
              </li>
              <li className="navigation-item">
                <Link to="/signin" onClick={handleRouteChange}>Zaloguj się</Link>
              </li>
            </ul>
          </div>
          <span className="text-logo">BTSK</span>
          <div className="profile-img-div">
            <div className="profile-img-div-size">
              <img className="profile-img" src={profilePic} alt="profile-pic"/>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header;
