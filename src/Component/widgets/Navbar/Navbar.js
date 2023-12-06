// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav className='NavBooking'>
      <ul className='NavBooking_ul'>
        <li className='NavBooking_li'>
          <Link to="/employee">Employee</Link>
        </li>
        <li className='NavBooking_li'>
          <Link to="/nonemployee">Non-Employee</Link>
        </li>
        <li className='NavBooking_li'>
          <Link to="/custom">Custom</Link>
        </li>
        <li className='NavBooking_li'>
          <Link to="/bookingListing">Booking List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
