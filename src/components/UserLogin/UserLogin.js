import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import s from './UserLogin.module.css';

export default function UserLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.contact__form}>
      <h1>LogIn please!</h1>
      <form onSubmit={handleSubmit} className={s.input__form}>
        <label>
          <span className={s.input__title}>Email</span>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
            className={s.input__name}
          />
          <span className={s.input__title}>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input__name}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
