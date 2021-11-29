import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/contacts"
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        Phonebook
      </NavLink>
      <hr />
    </nav>
  );
};

export default Navigation;
