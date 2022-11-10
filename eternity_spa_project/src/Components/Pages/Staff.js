
// src - EmployeeList.js
import '../Staff.css';
import '../Employee.css';
//import Header from './Header';
//import doctor2 from 'images/doctor2.jpg';
//import doctor3 from 'images/doctor3.jpg';
//import doctor4 from 'images/doctor4.jpg';
//import doctor5 from '/images/doctor5.jpg';
//import doctor6 from '/images/doctor6.jpg';
//import doctor7 from '/images/doctor7.jpg';
import React from 'react';
import Employee from './Employee';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link} from "react-router-dom"; 
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
 //import {
   // faYoutube, faFacebook, faTwitter, faInstagram
//} from '@fortawesome/free-brands-svg-icons';
//import logo1 from './logo1.jpg';


function Headers() {
    return (
        <div className="Header">
            <br />
            <h1 className="h1"> Our Team </h1>
            <img className="img1" alt="logo" src = {process.env.PUBLIC_URL + "images/image-1.jpg"} />
        </div>
    )
}

{/*function Footer1() {
    return (
        <div className="Footer1">
            <h3> Follow Us On Social Media! </h3>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a> 
        </div>
    )
} */}



function Staff() {
    return (
        <div className="Staff">
            <Headers />
        <div className="StaffList">
            <div className="grid-1">
            <img alt="doctor1" src={process.env.PUBLIC_URL + "images/doctor7.jpg"} width="400px" height="300px" />
            <br /> <p> Meet James Thomas. For More <Link to="/employee1">  Click  </Link> The Image </p>
            </div>
            <div className="grid-2"><img alt="doctor2" src={process.env.PUBLIC_URL + "images/doctor2.jpg"} width="400px" height="300px" />
            <br /> <p> Meet Tina Cortez. For More <Link to="/employee2">  Click  </Link> The Image </p>
            </div>
            <div className="grid-3"><img alt="doctor3" src={process.env.PUBLIC_URL + "images/doctor3.jpg"} width="400px" height="300px" />
            <br /> <p> Meet Joe Wilson. For More <Link to="/employee3">  Click </Link> The Image </p>
            </div>
            <div className="grid-4"><img alt="doctor4" src={process.env.PUBLIC_URL + "images/doctor4.jpg"} width="400px" height="300px" />
            <br /> <p> Meet Kimberly Johnson. For More <Link to="/employee4">  Click  </Link> The Image </p>
            </div>
            <div className="grid-5"><img alt="doctor5" src={process.env.PUBLIC_URL + "images/doctor5.jpg"} width="400px" height="300px" />
            <br /> <p> Meet Timothy Dawkins. For More <Link to="/employee5">  Click  </Link> The Image  </p>
            </div>
            <div className="grid-6"><img alt="doctor6" src={process.env.PUBLIC_URL + "images/doctor6.jpg"} width="400px" height="300px" />
            <br /> <p> Meet Cynthia Wiliiams. For More <Link to="/employee6">  Click  </Link> The Image </p>
            </div>
        </div>

        {/*
        <Router>
            <Routes>
                <Route exact path="/employee1" element={<Employee src={process.env.PUBLIC_URL + "images/doctor7.jpg"} />} />
                <Route exact path="/employee2" element={<Employee src={process.env.PUBLIC_URL + "images/doctor2.jpg"} />} />
                <Route exact path="/employee3" element={<Employee src={process.env.PUBLIC_URL + "images/doctor3.jpg"} />} />
                <Route exact path="/employee4" element={<Employee src={process.env.PUBLIC_URL + "images/doctor4.jpg"} />} />
                <Route exact path="/employee5" element={<Employee src={process.env.PUBLIC_URL + "images/doctor5.jpg"} />} />
                <Route exact path="/employee6" element={<Employee src={process.env.PUBLIC_URL + "images/doctor6.jpg"} />} /> 
            </Routes>  
        </Router>
    */}
            {/*<Footer1 /> */}
        </div>
    )
}

export default Staff