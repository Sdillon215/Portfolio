import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <Link className="header-link" to="/">
        <h1>Sean Dillon</h1>
      </Link>

      <ul>
        <li>
          <NavLink exact className="header-link tab" activeClassName="active" to="/">About</NavLink>
        </li>
        <li>
          <NavLink className="header-link tab" activeClassName="active" to="/Portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink className="header-link tab" activeClassName="active" to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink className="header-link tab" activeClassName="active" to="/Resume">Resume</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
