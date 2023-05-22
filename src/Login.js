import React from 'react';
import './style.css';

export default function Login() {
  return (
    <div className="loginParent">
      <h1 className="loginHeading">Login</h1>
      <input className="nameInput" type="text" placeholder="Name" />
      <input className="passwordInput" type="password" placeholder="Password" />
      {/* onclick check the DB */}
      <button className="loginBtn">Login</button>
    </div>
  );
}
