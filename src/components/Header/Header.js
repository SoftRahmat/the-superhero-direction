import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <h1 className="text-primary">10 Best Pro Computer Programmers In The World!</h1>
      <h3 className="mb-4 text-danger">Total Budget: 250 Million</h3>
      <nav>
        <a href="/programmers">Programmers</a>
        <a href="/events">Events</a>
        <a href="/about">About us</a>
      </nav>
    </div>
  );
};

export default Header;
