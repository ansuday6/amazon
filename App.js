import React from 'react';
import "./App.css";
import Header from "./Header";
import Home from  "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
   return (
    <Router>
       <div className="App">
         <Header />

           <Routes>

            <Route Path="/checkout" element={<Checkout />} />
             <Route path="/" element={<Home />} />
             
           </Routes> 

        </div>

    </Router>
  );
}

export default App;
