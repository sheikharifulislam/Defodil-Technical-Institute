import React from 'react';
import './aboutus.css';
import historyImage from '../../images/our-Campuses.jpg';
import vissionImage from '../../images/missionvission.png';

const Aboutus = () => {
    return (
        <section id="about-us-section">
            <div className="container-fluid">
                <div className="history-section">
                    <div className="history-section-title">
                        <h1>history of dti</h1>
                    </div>
                    <div className="history-container">
                        <div className="history-section-image">
                            <img src={historyImage} alt="" />
                        </div>
                        <div className="history-section-descriptions">
                            <p>Daffodil techinical Institute which has been functioning since 2003 to develop professional Human Resources in different fields of education and training. DPI  has completely changed the traditional concept of polytechnic, technical & professional skill development training institutes in Bangladesh. Today DPI  is very well known institute for science, engineering, art study and also for professional and leadership development training programs. It is the first and only polytechnic institute of the country which has been awarded internationally. To run and lead the science & engineering programs BSDI has initiated new associated operating wing Daffodil Polytechnic Institute. DPI as a part of  daffodil will run the Technical Education Board programs and DPI  will provide Professional programs and Employability Skills Training program in different disciplines. The long term strategic decision has been taken in a momentum considering the broader strategy to make the institute more competitive nationally and internationally.</p>
                        </div>
                    </div>
                </div>
                <div className="mission-and-vission-section">
                    <div className="mission-and-vission-section-title">
                        <h1>mission and vission</h1>
                        <div className="mession-and-vission-section-container">
                            <div className="messison-and-vission-image">
                                <img src={vissionImage} alt="" />
                            </div>
                            <div className="mession-and-vission-and-descriptions">
                                <div className="mission">
                                    <div className="section-title">
                                        <h2>Mission</h2>
                                    </div>
                                    <p>We want to contribute to national economy through Developing Technically Skilled Human Resources Creating Entrepreneurs Ensuring competency among every successful student Serving the Industries through Developing Human Resources with required skills</p>
                                </div>
                                <div className="vission">
                                <div className="section-title">
                                        <h2>Vission</h2>
                                    </div>
                                    <p>To be the recognized institute in the national and international arena forcontributing in the development of highly skilled, employable graduates and to beknown as the valuable resource for industry and society for developing human resources with required skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>        
    );
};

export default Aboutus;