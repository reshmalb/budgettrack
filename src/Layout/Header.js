import React from "react";
import './Header.css'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { authActions } from "../Store/AuthStore";
import { useHistory } from "react-router-dom";


const Header=()=>{
  const isAuth=useSelector(state=>state.author.isAuthenticated)
  const email=useSelector(state=>state.author.email)

  const dispatch=useDispatch();
  const history=useHistory()
  const logoutHandler=()=>{
    dispatch(authActions.logout());   


  }

    return(
      <header>
           <div  className='container'>
               <a href='#'>Logo</a>
              
                  <nav>
                     <a href='#'>Home</a>
                     <a href='#'>About</a>
                     <a href='#'>Contact</a>
                    
                   {isAuth &&  <button type="link"  onClick={logoutHandler}>Logout</button>}
                 </nav>
          </div>
      </header>
        
       
    )

}
export default Header;