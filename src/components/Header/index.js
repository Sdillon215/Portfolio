import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Sean Portfolio</h1>
        </Link>

        <nav className="text-center">
            <>
              <Link to="/">About</Link>
              <Link to="/Portfolio">Portfolio</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Resume">Resume</Link>

              
            </>
        </nav>
      </div>
    </header>
  );
};

export default Header;
