import { BrowserRouter , Route, Routes, Link} from "react-router-dom";
import './App.css';
import Home from './Components/Pages/Home';
import React  from "react";
import Navbar from './Components/Navbar';
import { Button } from "./Components/Button";
import Treatment from './Components/Pages/Treatment';

 
function App() {

  return(
    <>
    <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/Treatments" element={<Treatment/>}/>
        </Routes>
    </BrowserRouter>    
      </>
  );  
}
export default App;
