import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {EmployeeDashboard, EmployeeDetail,} from './Components/Employee';


function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route path="*" element={<EmployeeDashboard onSubmit={addEmployee} onSave={saveData} />}>
                      <Route index element={<div>Select an employee from the list.</div>} />
                      <Route path="employees/:id" element={<EmployeeDetail />} />
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
