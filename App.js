import React from 'react';
import "./App.css";
import Home from  "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";



function App() {
  
   return (
    <Router>
       <div className="App">
        

           <Routes>
             <Route path="/login" element={<Login />} />

             <Route path="/" element={<Home />}/>

             <Route path="/checkout" element={<Checkout />} />
           </Routes> 
        </div>

    </Router>
  );
}

export default App;
