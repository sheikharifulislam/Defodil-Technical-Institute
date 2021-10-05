import axios from "axios";
import { useEffect, useState } from "react";


const UseLoadImageData = () => {
    const [imagesData, setImagesData] = useState([]);
    useEffect(() => {
        axios.get('./images.json')
        .then((response) => setImagesData(response.data));
    }, []);

    return [imagesData];
};

export default UseLoadImageData;