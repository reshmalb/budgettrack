import React from "react";
import { useSelector } from "react-redux";
import './AcivatePremiumButton.css'

const TotalExpense=()=>{
    const totalAmount=useSelector(state=>state.expense.totalExpenses)
    
    return(
        <p type="text" style={{color:"white",fontSize:"20px"}} aria-disabled="true">Total Expenses:{" "}Rs.{totalAmount}
                </p>
    )
}

export default TotalExpense;