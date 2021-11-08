import React from 'react';
import {
  Github,
  LinkedIn
} from '../../assets/images';

const Footer = () => {
  return (
    <footer className="section">
      {/* <footer className="section"> */}
            <address>
                <ul>
                    <li>
                        <a href="https://github.com/Sdillon215" target="_blank">
                            <img src={Github} alt="github logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/seandillon215/" target="_blank">
                            <img src={LinkedIn} alt="linkedin logo" />
                        </a>
                    </li>
                </ul>
            </address>
      <div className="container">&copy;2020 by Dillon</div>
    </footer>
    
  );
};

export default Footer;
