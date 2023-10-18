import React from 'react';
import { useParams } from 'react-router-dom';
import '../../Content/employee.css';

function EmployeeDetail(props) {
  const { id } = useParams();
  const employee = props.employees.find((emp) => emp.id === parseInt(id));

  // Provide fallback object if employee is undefined
  const { id: EmployeeId, firstName, lastName, email, phone } = employee || {};

  return (
      <div className="employee-detail">
        <table>
          <tbody>
          <tr>
            <td><label>Employee ID:</label></td>
            <td>{EmployeeId}</td>
          </tr>
          <tr>
            <td><label>Name:</label></td>
            <td>{firstName} {lastName}</td>
          </tr>
          <tr>
            <td><label>Email:</label></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><label>Phone:</label></td>
            <td>{phone}</td>
          </tr>
          </tbody>
        </table>
      </div>
  );
}

export default EmployeeDetail;
