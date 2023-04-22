import React,{useState} from "react";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import './MainPage.css'



const MainPage=()=>{
    const [islogin,setlogin]=useState(false);
    const onclickHandler=()=>{
      setlogin((prev)=>!prev);
    }
    const signUpHandler=()=>{
      setlogin((prev)=>!prev)
    }
    return(
        <div className='banner-container'>
        <div className='container'>
             <div className='left-section'>
              <h1>Welcome to Expense Tracker</h1>
              <p> this is the app for maintaining day today expenses  </p>
              <button onClick={onclickHandler}>{islogin?'SignUp':'Login'}</button>
             </div>
             {islogin&&<Login/> }
                             
             {!islogin && <SignUp onClick={signUpHandler}/>}                        

        </div>

    </div>
    )


}

export default MainPage;