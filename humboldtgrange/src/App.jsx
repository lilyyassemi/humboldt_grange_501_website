import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Pages
import { Home } from './main_pages/Home';
import { About } from './main_pages/About';
import { Contact } from './main_pages/Contact';
import { Member } from './main_pages/Member';
import { Team } from './main_pages/Team';
import { History } from './main_pages/History';
import { Rentals } from './main_pages/Rentals';
import { Calendar } from './main_pages/Calendar';
import { Layout } from './Layout';

// Member/Admin Pages
import { AdminDashboard } from './member_pages/AdminDashboard';
import { MemberDashboard } from './member_pages/MemberDashboard';
import { Login } from './member_pages/Login';
import { SignUp } from './member_pages/SignUp';
import { ExistingSignUp } from './member_pages/ExistingSignUp';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/membership" element={<Member />} />
          <Route path="/about/meet-the-team" element={<Team />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Member/Admin Pages without Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/member-dashboard" element={<MemberDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/existing-signup" element={<ExistingSignUp />} />

      </Routes>
    </Router>
  );
}

export default App;
