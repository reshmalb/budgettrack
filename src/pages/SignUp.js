import React ,{useRef}from "react";
import  './login.css';
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";



const SignUp=()=>{
  const emailref=useRef()
  const passwordref=useRef();
  const confirmPasswordref=useRef()
  const isAuth=useSelector(state=>state.author.isAuthenticated)
  const history=useHistory();




    const handleSignup = async (event) => {
        event.preventDefault();
        const email=emailref.current.value;
        const password=passwordref.current.value;
        const confirmPassword=confirmPasswordref.current.value;
 
        if(email===''||password===''){
            alert("please enter valid email and password")
        } 
        if(password!==confirmPassword){
          alert("password mismatch")
        }
        const user={
           email:email,
           password:password,
        }
        if(!isAuth){
          try{
            const response=await axios.post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBmu2iAn2bEUPLR2hBHCQAhknCpMMWjz3o',{
                    email:user.email,
                    password:user.password,
                    returnSecureToken:true,
                })
                console.log("signup",response)
                if(!response.statusText===200){
                    throw new Error("Sign up Failed")
                }
                else{
                  alert('successfully created account.. please login to continue')
                  emailref.current.value="";  
                  passwordref.current.value="";
                  confirmPasswordref.current.value="";
                }
         emailref.value="";           
              
        } catch(error){
        alert(error.message)
          }
        }
        else{
          alert("you are already logged in .. please signout to continue..")
        }
       
       
      };
    
    return(
        <div className='right-section'>
                             <h4>Create New Account.</h4>
                            <form autoComplete='off'>
                              <div className='input-group'>
                                  <input  type="email" id="email"ref={emailref} required/>
                                  <label htmlFor="email">Email:</label>

                              </div>
                              <div className='input-group'>
                                  <input  type="password" id="pasword" ref={passwordref} required/>
                                  <label htmlFor="pasword">password:</label>

                              </div>
                              <div className='input-group'>
                                  <input  type="password" id="confirmpass" ref={confirmPasswordref} required/>
                                  <label htmlFor="c">Confirm password:</label>

                              </div>
                              <div className='submit-section'>
                                    <button type='submit' className='submit-button' onClick={handleSignup}>Signup</button>

                                   

                              </div>
                            </form>

                          </div>


    )
}
export default SignUp;