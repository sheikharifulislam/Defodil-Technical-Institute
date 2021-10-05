import React from 'react';
import UseLoadData from '../../coustomHooks/UseLoadData';
import SingleDepartment from '../singleDepartment/SingleDepartment';
import './allDepartments.css'

const AllDepartments = () => {

    const [data] = UseLoadData();   

    return (
        <section className="all-departments-section">
           <div className="container">
                <div className="all-departments-section-title">
                        <h1>Our All Departments</h1>
                </div>
                <div className="all-departments">
                    {
                        data.map((department) => <SingleDepartment key={department.id} department = {department}></SingleDepartment>)
                    }
                </div>
           </div>
        </section>
    );
};

export default AllDepartments;