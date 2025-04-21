import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-buttons">
            <Link to="/membership" className="footer-btn">Become a Member</Link>
            <Link to="/contact" className="footer-btn">Contact Us</Link>
        </div>
        <p>© {new Date().getFullYear()} Humboldt Grange #501. All rights reserved.</p>
      </div>
    </footer>
  );
}
