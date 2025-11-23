import React from "react";
import './Header.css'; // Optional, or use App.css

function Header() {
  return (
    <header className="header">
      <div className="profile-photo-wrapper">
        {/* Replace 'profile.jpg' with your photo's filename */}
        <img src="/profile.jpg" alt="Profile" className="profile-photo" />
      </div>
      <div>
        <h1>YOUR NAME</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
