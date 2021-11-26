import React, { useEffect } from 'react';
import "./App.css";
import Home from  "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment";





function App() {

  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
    
      console.log('현재 사용자는' + authUser + '입니다.');

      if(authUser) {

         dispatch({
            type: 'SET_USER',
            user: authUser
         })
       }

        else {

         dispatch({
           type: 'SET_USER',
           user: null
           
           })
         }
       })


    }, []
    )
   return (
    <Router>
       <div className="App">
        
           <Routes>
             <Route path="/login" element={<Login />} />

             <Route path="/" element={<Home />} />

             <Route path="/checkout" element={<Checkout />} />

             <Route path="/payment" element={<Payment /> } />

           
           </Routes> 
        </div>

    </Router>
 
 
    );

 }

export default App;
