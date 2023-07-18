import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./RegLog.css"

const LoginPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === input.email && user.password === input.password) {
        // Login successful
        navigate('/');
      } else {
        // Incorrect email or password
        alert('Invalid email or password');
      }
    } else {
      // User not found
      alert('User not found');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? Click on the{' '}
          <Link to="/register">register</Link> link.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
