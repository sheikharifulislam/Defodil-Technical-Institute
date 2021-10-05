import { useEffect, useState } from 'react';
import axios from 'axios';

const UseLoadData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/data.json')
      .then((response) => setData(response.data));
    }, []);

    return [data, setData];
};

export default UseLoadData;
