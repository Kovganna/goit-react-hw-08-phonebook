import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input type="text" name="email" required onChange={handleChange} />
        <span>Password</span>
        <input type="text" name="singup" onChange={handleChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
