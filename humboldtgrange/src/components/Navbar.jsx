import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolledPastHeader, setIsScrolledPastHeader] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const headerHeight = 250; // tweak as needed
        setIsScrolledPastHeader(window.scrollY > headerHeight);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolledPastHeader(true); // Always show sticky on non-homepages
    }
  }, [isHomePage]);

  const isSticky = isScrolledPastHeader;

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      {isSticky && <h1 className="navbar-title">Humboldt Grange #501</h1>}
      <div className={`nav-links ${isSticky ? 'shifted' : 'centered'}`}>
        <Link to="/">Home</Link>
        
        <div className="nav-item">
          <Link to="/about" className="dropdown-toggle">About</Link>
          <div className="dropdown-menu">
            <Link to="/about/history">Our History</Link>
            <Link to="/about/meet-the-team">Meet the Team</Link>
          </div>
        </div>
        <Link to="/membership">Join Us</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/rentals">Rentals</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
