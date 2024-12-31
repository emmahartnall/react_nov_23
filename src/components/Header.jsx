// components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div class="header-left">
            <img src="./images/LogoInverted-transparent.png" alt="Hartnall Digital Solutions Icon" class="header-icon"/>
      </div>
        <div class="header-center">
            <h1 class="heading">Hartnall Digital Solutions</h1>
            <h2 class="heading">Canberra Australia</h2>
            <nav class="navbar">
                <ul class="nav-list">
                    <li class="nav-item"><a href="index.html">Home</a></li>
                    <li class="nav-item"><a href="people.html">People</a></li>
                    <li class="nav-item"><a class="active" href="quote.html">Price Estimate</a></li>
                    <li class="nav-item"><a href="websites.html">Example Projects</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
