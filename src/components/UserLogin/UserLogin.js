import { useState } from 'react';
import s from './UserLogin.module.css';

export default function UserLogin() {
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
    e.preventdefault();
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.input__form}>
      <label>
        <span className={s.input__title}>Email</span>
        <input
          type="text"
          name="email"
          required
          value={email}
          onChange={handleChange}
          className={s.input__name}
        />
        <span className={s.input__title}>Password</span>
        <input
          type="text"
          name="singup"
          value={password}
          onChange={handleChange}
          className={s.input__name}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
