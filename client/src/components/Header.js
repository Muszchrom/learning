import profilePic from '../images/impostor.jpg'
import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const topTabTrap = useRef();
  const botTabTrap = useRef();

  const topNavTabTrap = useRef();
  const botNavTabTrap = useRef();

  const firstFocusableElement = useRef();
  const lastFocusableElement = useRef();
  const afterNavElement = useRef();

  let history = useLocation();

  useEffect(() => {
    const isNavActive = document.querySelector('.navigation-active');
    if (!isNavActive) {
      lastFocusableElement.current.focus();
      lastFocusableElement.current.blur();
    }
  }, [history]);

  useEffect(() => {
    document.addEventListener('focusin', trapFocus);

    return function cleanup() {
      document.removeEventListener('focusin', trapFocus);
    }

    function trapFocus(e) {
      if (e.target === topTabTrap.current) {
        lastFocusableElement.current.focus();
      }

      if (e.target === botTabTrap.current) {
        firstFocusableElement.current.focus();
      }

      if (e.target === botNavTabTrap.current) {
        firstFocusableElement.current.focus();
      }

      if (e.target === topNavTabTrap.current) {
        afterNavElement.current.focus();
      }
    }
  }, []);

  const handleClick = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('navigation-active');
    const isNavActive = document.querySelector('.navigation-active');
    if (isNavActive) {
      topTabTrap.current.tabIndex = '0';
      botTabTrap.current.tabIndex = '0';
      topNavTabTrap.current.tabIndex = '-1';
      botNavTabTrap.current.tabIndex = '-1';
    } else {
      topTabTrap.current.tabIndex = '-1';
      botTabTrap.current.tabIndex = '-1';
      topNavTabTrap.current.tabIndex = '0';
      botNavTabTrap.current.tabIndex = '0';
    }
  }

  const handleClickIfStatement = () => {
    const isNavActive = document.querySelector('.navigation-active');
    if (isNavActive) {
      handleClick();
    }
  }

  return (
    <header>
      <div className="header-wrapper">

        <span ref={topTabTrap}></span>
        <button ref={firstFocusableElement} className="hamburger" onClick={handleClick}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <span ref={topNavTabTrap} tabIndex="0"></span>
        <div className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li className="navigation-item">
              <Link to="/kalkulator" onClick={handleClick}>Kalkulatory</Link>
            </li>
            <li className="navigation-item">
              <Link to="/minecraft" onClick={handleClick}>Serwer Minecraft</Link>
            </li>
            <li className="navigation-item">
              {props.authenticatedUser
                ? <Link ref={lastFocusableElement} to="/signout" onClick={handleClick}>Wyloguj się</Link>
                : <Link ref={lastFocusableElement} to="/signin" onClick={handleClick}>Zaloguj się</Link>}
            </li>
          </ul>
        </div>
        <span ref={botNavTabTrap} tabIndex="0"></span>
        <span ref={botTabTrap}></span>

        <span className="text-logo">BTSK</span>
        <div className="profile-img-div">
          <Link ref={afterNavElement} to="/accountsettings" onClick={handleClickIfStatement}>
            <div className="profile-img-div-size">
              <img className="profile-img" src={profilePic} alt="profile-pic"/>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
