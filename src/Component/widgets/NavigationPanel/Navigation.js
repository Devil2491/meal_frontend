// Navigation.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navigation.css';
import Logo from "../../Assets/logo.svg"

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="navigation">
      <div className="logo-title">
        <img className="logo" src={Logo} alt="Logo" />
        <h1>Meal Facility</h1>
      </div>

      <div className="navigation-items">
        <Link to="/MyCalendar" className="nav-link">
          Calendar
        </Link>
        <Link to="/booking-list" className="nav-link">
          Booking List
        </Link>
        <div className="admin-section" onClick={toggleDrawer}>
          Admin
        </div>
        {isDrawerOpen && (
          <div className="drawer">
            <div onClick={toggleDrawer} className="close-btn">
              &times;
            </div>
            <ul>
              <li>Logout</li>
              <li>Forgot Password</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
