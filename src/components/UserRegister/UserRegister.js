import { useState } from 'react';

import s from './UserRegister.module.css';

export default function UserRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.contact__form}>
      <h1>Signup please!</h1>
      <form onSubmit={handleSubmit} className={s.contact_form}>
        <label>
          <span className={s.input__title}>Name</span>
          <input
            type="text"
            name="name"
            className={s.input__name}
            required
            value={name}
            onChange={handleChange}
          />
          <span className={s.input__title}>Email</span>
          <input
            type="text"
            name="email"
            className={s.input__name}
            required
            value={email}
            onChange={handleChange}
          />
          <span className={s.input__title}>Password</span>
          <input
            type="text"
            name="password"
            className={s.input__name}
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.btn__add}>
          Signup
        </button>
      </form>
    </div>
  );
}
