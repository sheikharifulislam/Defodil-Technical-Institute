import React from 'react';
import SomeDepartments from '../someDepartments/SomeDepartments';
import SomeDescriptions from '../someDescriptions/SomeDescriptions';

const Home = () => {
    return (
        <div>             
           <SomeDepartments/>
           <SomeDescriptions/>                  
        </div>
    );
};

export default Home;