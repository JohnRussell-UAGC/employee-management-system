import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';

function App() {
  // define the property for the employee, the function, and the default state.
  const [employees, setEmployees] = useState([]);

  // maintain an array of current employees
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // save the employee array to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    // add the div because JSX requires a singular parent, and we are adding a button
    <div>
      <EmployeeForm onSubmit={addEmployee} /> 
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}

export default App;
