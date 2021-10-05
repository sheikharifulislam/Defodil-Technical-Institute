import { useParams } from 'react-router';
import UseLoadData from '../../coustomHooks/UseLoadData';
import './details.css';

const ShowDetails = () => {

    const {courseId} = useParams();

    const [data] = UseLoadData();

   const result = data.find((d) => d.id === courseId);   
 
    

    return (
        <div className="details-section">
            <div className="container">
                <div className="details-section-title">
                    <h1>Course OverView</h1>
                </div>
                <div className="details-section-container">
                    <div className="departments-overview-setion">
                        <p>{result?.highlightOverview}</p>                  
                    </div>
                    <div className="departments-image-section">
                        <div className="department-card">
                           <div className="department-card-container">
                                <div className="department-image">
                                    <img src={result?.departmentImage} alt="" />
                               </div>
                               <div className="department-name">
                                    <h3>{result?.departmentName}</h3>
                               </div>
                                <div className="department-total-cost">
                                    <span>course Price: {result?.coursePrice} TK</span>
                                </div>
                                <div className="join-course">
                                    <button>Join Now</button>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;