import React from "react";
import "../Home/Home.css"

const Employee = () => {
  return (
    <div className="body">
      <h1 className="Booking">Employee</h1>
      <div className="Booking-input">
        <label>EmployeeID:</label>
        <input type="text" name="" id="" />
      </div>
      <div className="Booking-input">
        <label>Email:</label>
        <input type="email" name="" id="" />
      </div>
      <div className="Booking-input">
        <label>Department:</label>
        <select id="dropdown" name="fruits">
          <option value="Admin">Admin</option>
          <option value="FullStack">FullStack</option>
          <option value="QA">QA</option>
          <option value="DA">DA</option>
          <option value="DS">DS</option>
          <option value="DE">DE</option>
          <option value="BA">BA</option>
        </select>
      </div>
      <div className="Booking-input">
        <label>Category:</label>
        <input type="radio" name="meal" value="lunch" /> Lunch
        <input type="radio" name="meal" value="dinner" /> dinner
      </div>
      <div className="Booking-input">
        <label>Start Date:</label>
        <input type="date" name="" id="" />
        <label>End Date:</label>
        <input type="date" name="" id="" />
      </div>
    </div>
  );
};

export default Employee;
