
// src - EmployeeList.js
import './EmployeeList.css';
import Headers from './Header';
import './Header.css';
import './Footer.css';
import Footer from './Footer';
import doctor2 from './doctor2.jpg';
import doctor3 from './doctor3.jpg';
import doctor4 from './doctor4.jpg';
import doctor5 from './doctor5.jpg';
import doctor6 from './doctor6.jpg';
import doctor7 from './doctor7.jpg';
import React from 'react';
import {Link} from "react-router-dom"; 




function EmployeeList() {

    return (
      <div className="list-page">  
           <Headers />
        <div className="EmployeeList">
            <div className="grid-1">
            <img alt="doctor1" src={doctor7} width="400px" height="300px" />
            <br /> <p> Meet James Thomas. For More <Link to="/employee1">  Click  </Link> The Image </p>
            </div>
            <div className="grid-2"><img alt="doctor2" src={doctor2} width="400px" height="300px" />
            <br /> <p> Meet Tina Cortez. For More <Link to="/employee2">  Click  </Link> The Image </p>
            </div>
            <div className="grid-3"><img alt="doctor3" src={doctor3} width="400px" height="300px" />
            <br /> <p> Meet Joe Wilson. For More <Link to="/employee3">  Click </Link> The Image </p>
            </div>
            <div className="grid-4"><img alt="doctor4" src={doctor4} width="400px" height="300px" />
            <br /> <p> Meet Kimberly Johnson. For More <Link to="/employee4">  Click  </Link> The Image </p>
            </div>
            <div className="grid-5"><img alt="doctor5" src={doctor5} width="400px" height="300px" />
            <br /> <p> Meet Timothy Dawkins. For More <Link to="/employee5">  Click  </Link> The Image  </p>
            </div>
            <div className="grid-6"><img alt="doctor6" src={doctor6} width="400px" height="300px" />
            <br /> <p> Meet Cynthia Wiliiams. For More <Link to="/employee6">  Click  </Link> The Image </p>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export default EmployeeList