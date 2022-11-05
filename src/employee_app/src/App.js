
import './App.css';
import './EmployeeList.css';
import './EmployeePage.css';
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Link, Navigate, Redirect } from "react-router-dom";  
//import { useHistory } from "react-router-dom";
import EmployeeList from './EmployeeList';
import doctor1 from './doctor7.jpg';
import doctor2 from './doctor2.jpg';
import doctor3 from './doctor3.jpg';
import doctor4 from './doctor4.jpg';
import doctor5 from './doctor5.jpg';
import doctor6 from './doctor6.jpg'; 
import EmployeePage from './EmployeePage';

function App() {
  return (
    <div className="App">
   {/* <Headers /> */}
    <Router>
        {/*< EmployeeList /> */}
        <Routes>
       {/* < EmployeeList /> */}
            <Route exact path="/" element={<EmployeeList/>} />
            <Route exact path="/employee1" element={<EmployeePage src={doctor1} />} />
            <Route exact path="/employee2" element={<EmployeePage src={doctor2} />} />
            <Route exact path="/employee3" element={<EmployeePage src={doctor3} />} />
            <Route exact path="/employee4" element={<EmployeePage src={doctor4} />} />
            <Route exact path="/employee5" element={<EmployeePage src={doctor5} />} />
            <Route exact path="/employee6" element={<EmployeePage src={doctor6} />} />
            </Routes>  
        </Router>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
