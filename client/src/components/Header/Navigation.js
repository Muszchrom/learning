import { NavLink } from 'react-router-dom';
export default function Navigation() {
  const handleClick = () => {
    if(document.querySelector('.hamburger').classList.contains('hamburger-active')){
      document.querySelector('.hamburger').classList.toggle('hamburger-active');
      // nav.classList.toggle('navigation-active');
      document.querySelector('.main-header').classList.toggle('header-navigation-active');
      document.querySelector('.navigation').classList.toggle('navigation-active');
      document.getElementsByTagName('body')[0].classList.toggle('body-navigation-active');
    }
  }
  return (
    <div className="navigation">
      <ul className="navigation-u-list">
        <li className="navigation-u-list-item">
          <NavLink exact to='/' onClick={handleClick}>Strona Główna</NavLink>
        </li>
        <li className="navigation-u-list-item">
          <NavLink to='/info' onClick={handleClick}>Informacje</NavLink>
        </li>
        <li className="navigation-u-list-item">
          <NavLink to='/reviews' onClick={handleClick}>Recenzje</NavLink>
        </li>
        <li className="navigation-u-list-item">
          <NavLink to='/games' onClick={handleClick}>Gry</NavLink>
        </li>
        <li className="navigation-u-list-item">
          <NavLink to='/signin' onClick={handleClick}>Zaloguj się</NavLink>
        </li>
      </ul>
    </div>
  );
}
