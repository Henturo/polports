import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="profile-photo-wrapper">
        {/* Provide your photo in public/profile.jpg */}
        <img src="/profile.jpg" alt="Profile" className="profile-photo" />
      </div>
      <div>
        <h1>Paul John Palamara</h1>
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
