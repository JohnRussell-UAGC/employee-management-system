// import the necessary libraries
import React, { useState, useEffect } from 'react';
import '../../Content/employee.css';

// define the function
function EmployeeForm(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

  // define a submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        const employee = {
            id: Math.floor(Math.random() * 10000),
            firstName,
            lastName,
            email,
            phone, // added field
            username,
            password
        };
        props.onSubmit(employee);
        props.onSave();  // Save data to localStorage after adding the employee
        setUsername('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
    };


  // Render the HTML
  return (
    // define the form
      <form className="employee-form" onSubmit={handleSubmit}>
          <h2>Add Employee</h2>
          <div>
              <label htmlFor="firstName">First Name: </label>
              <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
              />
          </div>
          <div>
              <label htmlFor="lastName">Last Name: </label>
              <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
              />
          </div>
          <div>
              <label htmlFor="email">Email: </label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div>
              <label htmlFor="phone">Phone: </label>
              <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
              />
          </div>
          <button type="submit">Add</button>
      </form>
  );
}

// allow the Component to be called from elsewhere
export default EmployeeForm;
