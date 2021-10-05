import React from 'react';
import UseLoadData from '../../coustomHooks/UseLoadData';
import SingleDepartment from '../singleDepartment/SingleDepartment';
import './someDepartments.css';

const SomeDepartments = () => {
    const [data] = UseLoadData();
    console.log(data);
    
    return (
      <section className="some-departments-section">         
          <div className="container">
                <div className="section-title">
                    <h2>Our Departments</h2>
                </div>
               <div className="hightlight-departments">
                    {
                         data.slice(0, 4).map((department) =>  <SingleDepartment key= {department.id} department = {department}/>)
                    }  
               </div>
          </div>
      </section>
    );
};

export default SomeDepartments;