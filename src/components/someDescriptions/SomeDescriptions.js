import React from 'react';
import image from '../../images/choose.png'
import './someDescriptions.css'

const SomeDescriptions = () => {
    return (
        <section id= "why-choose-section">
            <div className="section-title">
                <h1>why choose deffodil technical institute</h1>
                <div className="why-choose">
                    <div className="why-choose-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="why-choose-details">
                        <div className="why-choose-laptop-part">
                            <h4>One Student One Laptop</h4>
                            <p>The first and only Daffodil Polytechnic Institute in the country is offering free laptops to students with the aim of building skilled diploma engineers in information technology for the technology dependent job market.</p>
                        </div>
                       <div className="why-choose-Scholarship-and-book-part">
                            <h4>Monthly Scholarships and Free Books.</h4>
                            <p>There are guaranteed government monthly stipends and free books for students</p>
                       </div>
                       <div className="why-choose-Work-Based-Scholarship-part">
                           <h4>Work Based Scholarship</h4>
                           <p>Daffodil Polytechnic Institute is formulating Work Based Scholarship to create an environment for students to use their skills in addition to their regular studies. As a result, students are getting job opportunities along with their studies.</p>
                       </div>
                       <div className="why-choose-job-placement-part">
                           <h4>Job Placement Cell</h4>
                           <p>We have a Job Placement Cell to provide job assurance and internship placement support to Daffodil technical Institute students.</p>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SomeDescriptions;