import React, { useState } from 'react';
import './RegLog.css';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!input.name || !input.email || !input.password) {
      alert('Please fill in all fields.');
      return;
    }

    // Additional validation logic (e.g., password strength, email format, etc.)

    localStorage.setItem('user', JSON.stringify(input));
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            name="name"
            value={input.name}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            type="text"
            id="username"
          />

          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            type="email"
            id="email"
          />

          <label htmlFor="password">Password:</label>
          <input
            name="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            type="password"
            id="password"
          />

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? Click{' '}
          <Link to="/login">here</Link> to login.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
