import { Link } from "react-router-dom"
import React, {useEffect, useState} from 'react';
import './Navbar.css';

export function Navbar({ isSticky }) {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      if (!isSticky) {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    }, [isSticky]);
  
    return (
      <nav className={`navbar ${isSticky || isScrolled ? 'sticky' : ''}`}>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/contact">
                <button>Contact</button>
            </Link>
            <Link to="/membership">
                <button>Join</button>
            </Link>
            <Link to="/rentals">
                <button>Rentals</button>
            </Link>
            <Link to="/schedule">
                <button>Schedule</button>
            </Link>
      </nav>
    );
  }