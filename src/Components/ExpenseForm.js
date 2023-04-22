import React, { useEffect, useRef, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from 'axios';
import { sendExpenseData } from "../Store/DataActions";




import './ExpenseForm.css'
import { expenseActions } from "../Store/ExpenseStore";

const ExpenseForm=()=>{
    const descRef=useRef();
    const amountRef=useRef();
    const [category,setCategory]=useState();
    const [editId,setEditId]=useState(null);



    const expenses=useSelector(state=>state.expense);
    const isAuth=useSelector((state)=>state.author.isAuthenticated)
    const expenseData=useSelector(state=>state.expense.expensedetails);
    const totalAmount=useSelector(state=> state.expense.totalExpenses)


    console.log("expenseData",expenseData)
    const dispatch=useDispatch();

   const categoryChangeHandler=(e)=>{
    setCategory(e.target.value)
   }
  


    const handleSubmit=(event)=>{
        event.preventDefault();
        const description=descRef.current.value;
        const amount=amountRef.current.value;      
        const newExpense={title:description,
                          amount:amount,
                          category:category,                            
        }
        if(editId){
          dispatch(expenseActions.addExpenses({
                      id:editId,
                      title:description,
                      amount:amount,
                      category:category,  
          }))
          setEditId(null)
        }else{
          dispatch(expenseActions.addExpenses(newExpense))
        }
      
        descRef.current.value="";
        amountRef.current.value="";
        setCategory("")
    }
    //EDIT BUTTON HANDLER
  const editButtonHandler= (expense)=>{  
   
     amountRef.current.value=expense.amount;
     descRef.current.value=expense.title;
     setCategory(expense.category)
     setEditId(expense.id)


  

  }
    const deleteButtonHandler= (id)=>{
      dispatch(expenseActions.removeExpenseData(id))
    }


    return (
        <>
              
          <form className="expense-form" onSubmit={handleSubmit}>   
          <div className="input-group-expense">
            <label htmlFor="amount">Amount:</label>          
            <input
              type="number"
              id="amount"
              min="0"
              step="0.01"
              ref={amountRef}           
              required
            />
            </div>
            <div className="input-group-expense">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              ref={descRef}             
              required
            />
            </div>
            <div className="input-group-expense">
             <label htmlFor="category">Category:</label>
             <select id="category" value={category}onChange={categoryChangeHandler} >
              <option value="">Select a category</option>
              <option value="Food">Food</option>
              <option value="Petrol">Petrol</option>
              <option value="Salary">Salary</option>
              {/* Add more options here */}
             </select>
            </div>
           
            <button type="submit" className="submit-button-expense">Add expense</button>
          
          </form>
 <div className="table-section">
            <h2>Expenses</h2>
            <table className="table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Title</th>
          <th>Edit Details</th>
          <th>Remove Details</th>


        </tr>
      </thead>
      <tbody>
        {expenseData.map(item => (
          <tr key={item.id}>
            <td>{item.category}</td>
            <td>{item.amount}</td>
            <td>{item.title}</td>
            <td>
              <button onClick={editButtonHandler.bind(null,item)}>Edit</button>
            </td>
            <td>
              <button onClick={deleteButtonHandler.bind(null,item.id)}>Delete</button>
            </td>
          </tr>
        ))}
        {/* <tr>
          <td></td>         
          <td>Total Amount</td>
          <td className="total-amount">{totalAmount}</td>
        </tr> */}
      </tbody>
    </table>


    {/* <table >
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>----</th>
          <th>----</th>

        </tr>
      </thead>
      <tbody >
        {expenseData.map((expense, index) => (
          <tr key={expense.id}>
            <td>{expense.category}</td>
            <td>{expense.title}</td>
            <td>{expense.amount}</td>
            <td>
              <button onClick={editButtonHandler.bind(null,expense)}>Edit</button>
            </td>
            <td>
              <button onClick={deleteButtonHandler.bind(null,expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody> */}
    {/* </table> */}
    </div>
         
          </>
       
      );
    }


export default ExpenseForm;