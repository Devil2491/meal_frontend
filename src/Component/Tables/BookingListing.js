import React from 'react';
import '../Home/Home.css'

const EmployeeTable = () => {
  
  const employees = [
    { Date: '05-12-2023', Employee: 122, Non_Employee: 95, Custom: 30, Total: 247},
    
  ];

  return (
    <div className="table-container">
        <h1 className='table_h1'>Lunch</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Non_Employee</th>
            <th>Custom</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <td>{employee.Date}</td>
              <td>{employee.Employee}</td>
              <td>{employee.Non_Employee}</td>
              <td>{employee.Custom}</td>
              <td>{employee.Total}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <br />
        <h1 className='table_h1'>Dinner</h1>
        <table className="employee-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Non_Employee</th>
            <th>Custom</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <td>{employee.Date}</td>
              <td>{employee.Employee}</td>
              <td>{employee.Non_Employee}</td>
              <td>{employee.Custom}</td>
              <td>{employee.Total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
