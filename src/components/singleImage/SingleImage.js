import React from 'react';
import './singleImage.css'

const SingleImage = (props) => {
    return (
        <div className="single-image">
            <img src={props.image} alt="" />
        </div>
    );
};

export default SingleImage;