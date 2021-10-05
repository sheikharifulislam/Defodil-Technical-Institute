import React from 'react';
import notFound from '../../images/download.jpg';

const NotFound = () => {

    const notFoundStyle = {
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
    return (
        <div className="not-found" style ={notFoundStyle}>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;