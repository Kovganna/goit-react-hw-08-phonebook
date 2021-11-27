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
        to="/signup"
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        SignUp
      </NavLink>
      <NavLink to="/login" className={s.navLink} activeClassName={s.activeLink}>
        LogIn
      </NavLink>

      <hr />
    </nav>
  );
};

export default Navigation;