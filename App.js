import './App.css';
import Header from  './Header';
import Home from  './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';


function App() {
  return (
     <Router>
        <div className="App">

          <Routes>
            <Route path="/">
               <Header/>
               <Home/> 
            </Route>

            <Route path="/checkout">
               <Header/>
            
                <Checkout/>
              
            </Route>


     

           </Routes>
        </div>
     </Router>
  );
}

export default App;
