import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home.jsx'; 
import {About} from './pages/About.jsx'; 
import {Contact} from './pages/Contact.jsx'; 
import {Member} from './pages/Member.jsx'; 
import {Rentals} from './pages/Rentals.jsx';
import {Schedule} from './pages/Schedule.jsx';
import { Layout } from './Layout.jsx';


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/membership" element={<Member/>}/>
          <Route path="/rentals" element={<Rentals/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
        </Route>
      </Routes>
    </Router>
  );
}




export default App;
