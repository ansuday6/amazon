import React, { useState } from "react";
import './Login.css';
import {Link, useHistroy} from 'react-router-dom';
import {auth} from "firebase/app";



s
function Login() {

  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  const signIn = e => {
    e.preventDefault()

  }
  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password, setPassword)
    .then((auth) => {
       console.log(auth) ;
    }) 
    .catch(error => alert(error.message));


   
  }




  return (

   <div className="login">

       <Link to="/">
    
         <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png" alt="" />
         </Link>


      <div className="login_container">

         <h1>로그인</h1>

           <form>
            
              <h5> 이메일 </h5>

              <input value={email} onChange={e => setEmail(e.target.value)}
              type="text" />

              <h5> 비밀번호 </h5>

              <input value={password} onChange={e => setPassword(e.target.value)}
              type="password" />

              <button onClick={signIn} type='submit' className="login_signInButton"> 로그인 하기 </button>

            </form>


        <p> 이용약관에 동의 <input type="checkbox" /> </p>

        

       <button onClick={register} className="login_registerButton"> 회원가입 </button>



 



      </div>




      </div>

  );
}

export default Login;