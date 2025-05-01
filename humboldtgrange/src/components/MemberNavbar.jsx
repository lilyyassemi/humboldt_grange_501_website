import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function MemberNavbar() {
    return (
        <>
          <nav>
              <Link to="/member-dashboard">My Dashboard</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/rentals">Rentals</Link>
              <Link to="/contact">Contact</Link>
          </nav>
        </>
      );
}
