import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import EmployeeForm from './Components/EmployeeForm';
import EmployeeDetail from './Components/EmployeeDetail';
import EmployeeList from './Components/EmployeeList';

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
    // create the browser component and define the paths
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <EmployeeForm onSubmit={addEmployee} />
            <EmployeeList employees={employees} />
            <button onClick={saveData}>Save Data</button>
          </>
        } />
        <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
