import React, { useRef } from "react";
import './login.css'
import { useDispatch,useSelector } from "react-redux";
import { loginRequest } from "../Store/DataActions";
import { useHistory } from "react-router-dom";
const Login=()=>{
  const isAuth=useSelector(state=>state.author.isAuthenticated)
  const dispatch=useDispatch();
    const emailref=useRef()
    const passwordref=useRef();
    const history=useHistory(); 
    const handleLogin = async (event) => {
        event.preventDefault();
        const email=emailref.current.value;
        const password=passwordref.current.value;
        if(email===''||password===''){
            alert("please enter valid email and password")
        }
        const user={email:email,
                    password:password}
                  dispatch(loginRequest(user))
                  if(isAuth){
                     history.replace('/dashboard')
                  }
    
      };
    
    
    return(
        <div className='right-section'>
        <h4>Login</h4>
       <form autoComplete='off'>
         <div className='input-group'>
             <input  type="email" id="email"ref={emailref} required/>
             <label htmlFor="email">Email:</label>

         </div>
         <div className='input-group'>
             <input  type="password" id="pasword" ref={passwordref} required/>
             <label htmlFor="pasword">password:</label>

         </div>
         
         <div className='submit-section'>
               <button type='submit' className='submit-button' onClick={handleLogin}>Log In</button>           

         </div>
       </form>

     </div>


    )
}
export default  Login;