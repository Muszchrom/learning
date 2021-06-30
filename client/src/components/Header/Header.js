import logo from '../../img/logo.png';
import Navigation from './Navigation';
import Hamburger from './Hamburger';
export default function Header() {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <Hamburger />
        <div className="text-logo-h1">
          <h1>Games Invaders</h1>
        </div>
        <Navigation />
        <div className="img-logo">
          <img src={logo} alt="logo graficzne" />
        </div>
      </div>
    </header>
  );
};
