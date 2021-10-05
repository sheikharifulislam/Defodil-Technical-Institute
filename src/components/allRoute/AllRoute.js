import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,  
  } from "react-router-dom";
import Aboutus from '../about/Aboutus';
import AllDepartments from '../allDepartments/AllDepartments';
import AllImages from '../allimages/AllImages';
import ShowDetails from '../details/ShowDetails';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Home from '../home/Home';
import NotFound from '../notFound/NotFound';

const AllRoute = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path = '/all-departments'>
                        <AllDepartments/>
                    </Route>
                    <Route exact path = '/all-departments/:courseId/course-details'>
                        <ShowDetails></ShowDetails>
                    </Route>
                    <Route exact path ="/photo-gallery">
                        <AllImages/>
                    </Route>
                    <Route exact path ="/about">
                       <Aboutus/>
                    </Route>
                    <Router exact path = "*">
                        <NotFound></NotFound>
                    </Router>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
};

export default AllRoute;