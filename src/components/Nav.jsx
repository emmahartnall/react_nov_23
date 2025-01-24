import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import "../css/quoteClasses.css";

function Nav() {
  return (
    <nav class="navbar">
            <ul class="nav-list">
                <li class="nav-item"><a href="https://hartnall.com.au">Home</a></li>
                <li class="nav-item"><a href="https://hartnall.com.au/people">People</a></li>
                <li class="nav-item"><a class="active" href="quote.html">Price Estimate</a></li>
                <li class="nav-item"><a href="https://hartnall.com.au/websites">Example Projects</a></li>
            </ul>
        </nav>
  );
}

export default Nav;