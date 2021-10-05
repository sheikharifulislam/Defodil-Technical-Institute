import React from 'react';
import UseLoadImageData from '../../coustomHooks/UseLoadImageData';
import SingleImage from '../singleImage/SingleImage';
import './allImage.css'

const AllImages = () => {

    const [imagesData] = UseLoadImageData();
    console.log(imagesData);
   
    
    return (
        <div className="image-frame">
            <div className="container">
                <div className="image-frame-section-title">
                    <h1>Our Event Image</h1>
                </div>
                <div className="all-images">
                    {
                       imagesData?.map((photo) => <SingleImage key= {photo.key}  image = {photo.image} />) 
                    }
                </div>
            </div>           
        </div>
    );
};

export default AllImages;