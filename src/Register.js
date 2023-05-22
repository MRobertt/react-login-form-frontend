import React from 'react';
import './style.css';

export default function Register() {
  return (
    <div className="registerParent">
      <h1 className="registerHeading">Register</h1>
      <input className="nameInput" type="text" placeholder="Name" />
      <input className="passwordInput" type="password" placeholder="Password" />
      <input className="emailInput" type="email" placeholder="Email" />
      <input className="nicknameInput" type="text" placeholder="Nickname" />
      {/* onclick submit to DB */}
      <button className="registerBtn">Register</button>
    </div>
  );
}
