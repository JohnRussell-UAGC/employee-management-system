import React, { useEffect, useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetail';

import { Routes, Route, Outlet } from 'react-router-dom';

function EmployeeDashboard({ onSubmit, employees, onSave }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // json fetch loading state

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false); // set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); // even on error, set loading to false
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>; // display a loading message
    }


    const employeeDetailComponent = data.users ? (
        <Route path="/employees/:id" element={<EmployeeDetail employees={data.users} />} />
    ) : null;

    return (
        <>
            <EmployeeForm onSubmit={onSubmit} onSave={onSave} />
            <EmployeeList employees={data.users} />
            <Routes>
                {employeeDetailComponent}
            </Routes>
        </>
    );
}

export default EmployeeDashboard;
