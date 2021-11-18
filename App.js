import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from  "./Home";
import Checkout from "./Checkout";


function App() {
   return (
    <Router>
        <div className="App">
         <Header/>
          <Routes>
          
           <Route path="/" element={<Home />} />
           <Route Path="/checkout" element={<Checkout />} />

          </Routes> 
        </div>
     </Router>
  );
}

export default App;
