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
      <hr />
    </nav>
  );
};

export default Navigation;
