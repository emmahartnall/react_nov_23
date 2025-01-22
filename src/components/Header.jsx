// components/Header.jsx
import React from "react";
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div class="header-center">
        <h1 class="heading">Hartnall Digital Solutions</h1>
        <h2 class="heading">Canberra Australia</h2>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
