import { BrowserRouter , Route, Routes, Link} from "react-router-dom";
//import './Employee.css';
import './App.css';
import Home from './Components/Pages/Home';
import React  from "react";
import Navbar from './Components/Navbar';
import { Button } from "./Components/Button";
import Treatment from './Components/Pages/Treatment';
import Staff from './Components/Pages/Staff';
import Employee from './Components/Pages/Employee';

 
function App() {

  return(
    <>
    <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/Treatments" element={<Treatment/>}/>
          <Route path="/Staff" element={<Staff />}/>
          <Route exact path="/employee1" element={<Employee src={process.env.PUBLIC_URL + "images/doctor7.jpg"} />} />
          <Route exact path="/employee2" element={<Employee src={process.env.PUBLIC_URL + "images/doctor2.jpg"} />} />
          <Route exact path="/employee3" element={<Employee src={process.env.PUBLIC_URL + "images/doctor3.jpg"} />} />
          <Route exact path="/employee4" element={<Employee src={process.env.PUBLIC_URL + "images/doctor4.jpg"} />} />
          <Route exact path="/employee5" element={<Employee src={process.env.PUBLIC_URL + "images/doctor5.jpg"} />} />
          <Route exact path="/employee6" element={<Employee src={process.env.PUBLIC_URL + "images/doctor6.jpg"} />} />
        </Routes>
    </BrowserRouter>    
      </>
  );  
}
export default App;
