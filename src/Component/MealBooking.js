// MealBookingPage.js
import React, { useState } from 'react';
import "./styles.css";

const MealBookingPage = () => {
  const [employeeBookings, setEmployeeBookings] = useState([]);
  const [nonEmployeeBookings, setNonEmployeeBookings] = useState([]);
  const [othersBookings, setOthersBookings] = useState([]);
  const [newBooking, setNewBooking] = useState('');

//   const handleBookingChange = (e) => {
//     setNewBooking(e.target.value);
//   };

//   const handleEmployeeBooking = () => {
//     setEmployeeBookings([...employeeBookings, newBooking]);
//     setNewBooking('');
//   };

//   const handleNonEmployeeBooking = () => {
//     setNonEmployeeBookings([...nonEmployeeBookings, newBooking]);
//     setNewBooking('');
//   };

//   const handleOthersBooking = () => {
//     setOthersBookings([...othersBookings, newBooking]);
//     setNewBooking('');
//   };

  return (
    <>
    <div id="root">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Meal Facility</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Calender</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Booking List</a>
        </li>
      </ul>
      <div className="h-100 d-lg-inline-flex align-items-center">
              <ul className="app-nav">
                {/* <!--Notification Menu--> */}
                 <li className="dropdown"><a className="app-nav__item notification-num" href="#" data-toggle="dropdown" aria-label="Show notifications"><i className="icon-bell"></i> 
        
                 </a></li> 
                {/* <!-- User Menu-->  */}
                 <li className="dropdow"><a class="app-nav__item dropdown-toggle" href="#" data-toggle="dropdown" aria-label="Open Profile Menu">Admin</a>
                  <ul className="dropdown-menu settings-menu dropdown-menu-left">
                    <li><a className="dropdown-item" href="#" data-toggle="modal" data-target="#changepwdModal">Change Password</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
    </div>
  </div> 
 </nav> 
<div class="container-fluid">
      <div class="container">
        <div class="container-head">
          <div class="container-left">
            <h3 class="container-title">Booking List</h3>
          </div>
          <div class="container-right">
            <a href="#" aria-label="Add Booking" class="btn btn-primary" data-toggle="modal" data-target="#addBookingModal">Add Booking</a>
          </div>
        </div>

        <div class="content-tab">
          <a class="content-tab_link active" href="#">Rishabh Employees</a>
          <a class="content-tab_link" href="#">Others</a>
          </div> 
      </div>
    </div> 
    </div>
</>
    

  );
};

export default MealBookingPage;

