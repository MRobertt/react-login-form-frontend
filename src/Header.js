import React from 'react';
import './style.css';
import Login from './Login';
import Register from './Register';
import { useState, setState } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const handleLogin = (event) => {
    setIsVisible(true);
  };
  const handleRegister = (event) => {
    setIsVisible(false);
  };

  return (
    <div className="header">
      <button className="loginPage" onClick={handleLogin}>
        Sign in
      </button>
      <button className="registerPage" onClick={handleRegister}>
        Sign up!
      </button>
      {isVisible ? <Login /> : <Register />}
    </div>
  );
}
