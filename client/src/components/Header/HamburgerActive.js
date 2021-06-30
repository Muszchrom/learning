import { NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation-u-list">
        <li className="navigation-u-list-item navigation-active">
          <NavLink exact to='/'>Strona Główna</NavLink>
        </li>
        <li className="navigation-u-list-item navigation-active">
          <NavLink exact to='/placeholder1'>placeholder1</NavLink>
        </li>
        <li className="navigation-u-list-item navigation-active">
          <NavLink exact to='/placeholder2'>placeholder2</NavLink>
        </li>
        <li className="navigation-u-list-item navigation-active">
          <NavLink exact to='/placeholder3'>placeholder3</NavLink>
        </li>
        <li className="navigation-u-list-item navigation-active">
          <NavLink exact to='/signin'>Zaloguj się</NavLink>
        </li>
      </ul>
    </div>
  );
}
