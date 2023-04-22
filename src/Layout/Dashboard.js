import React from "react";
import AcivatePremiumButton from "../Components/ActivatePremiumButton";
import ToggleThemeButton from "../Components/ToggleThemeButton";
import DownloadExpense from "../Components/DownoadExpense";
import './Dashboard.css'
import Header from "./Header";
import ExpenseForm from "../Components/ExpenseForm";
import  { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from 'axios';
import { sendExpenseData } from "../Store/DataActions";
import { fetchData } from "../Store/DataActions";
import { themeActions } from "../Store/ThemeReducer";
import TotalExpense from "../Components/TotalExpense";
let initialFetch=true;



const Dashboard=()=>{
    const expenses=useSelector(state=>state.expense);
    const isAuth=useSelector((state)=>state.author.isAuthenticated)
    const change=useSelector((state)=>state.expense.isChanged)
    const theme=useSelector((state)=>state.toggletheme.theme)
    const showActivePremium=useSelector((state)=>state.expense.showActivatePremium)
    const emailid=useSelector((state)=>state.author.email)
    const dispatch=useDispatch();
    const newemailid=emailid.replace('.','')
    console.log("inside dashboard",expenses.cartdetails);
    useEffect(()=>{
        console.log("inside useeffect")
     
         dispatch(fetchData(newemailid));
        
       },[dispatch])


    
       useEffect(()=>{
        if(initialFetch){
    
          initialFetch=false;
          return;
        }
        if(change){
          dispatch(sendExpenseData(expenses,newemailid))
        }        
      },[expenses,dispatch])
      const toggleThemeHandler=()=>{
        dispatch(themeActions.toggleTheme());
      }

    return(
        <> 
        <div className={`banner-container-dashboard`}>
                <div className={`container-${theme}`}>                 
                    < div className="left-section-dashboard">                     
                        <div className="submit-section-dashboard">
                        <p style={{color:"white"}}>email:<span>{emailid}</span></p>  
                           {showActivePremium &&<AcivatePremiumButton/>}
                        </div>
                        <div className="submit-section-dashboard">
                                <ToggleThemeButton onClick={toggleThemeHandler}/>
                        </div>
                        <div className="submit-section-dashboard">
                                <DownloadExpense/>
                        </div>
                        <div className="submit-section-dashboard">
                                <TotalExpense/>
                        </div>
                    
                       </div>
                       <div className="right-section-dashboard">                           
                            <ExpenseForm/>            

                       </div>

                </div>


            </div>
        </>

            


    )
}

export default Dashboard;