// Footer.js

import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo"><img src="logo.svg" alt="logo" /></div>
            <p><Link to="mailto: mofelengmokgope@gmail.com">Email: mofelengmokgope@gmail.com</Link></p>
            <p><Link to="tel: 0695888059">Phone: +27 69 588 8059</Link></p>
            <p>Made with ❤️ from my living room(aka office) XD.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Mofeleng Shadow Mokgope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
