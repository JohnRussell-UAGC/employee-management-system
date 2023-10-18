import React from 'react';
import { Link } from 'react-router-dom';
import '../../Content/employee.css';

// A functional component for displaying a list of employees
function EmployeeList({ employees = [] }) {
    return (
        <div className="employee-list">
            <h1>Employee List</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        <Link to={`/employees/${employee.id}`}>
                            {employee.firstName} {employee.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
