import { createSlice } from "@reduxjs/toolkit";

const initialExpense={expensedetails:[],
    totalExpenses:0,
     showActivatePremium:false,
     isChanged:false}

const expenseSlice=createSlice({
    name:'expense',
    initialState:initialExpense,
    reducers:{
      
        addExpenses(state,action){
                // const newExpenses = [...state.expenses, action.payload];
                state.isChanged=true;
                const existItem=state.expensedetails.find((item)=>item.id===action.payload.id)
              
                if(!existItem){
                    state.expensedetails.push({
                        id:Math.random().toString()*1000,
                        title:action.payload.title,
                        amount:action.payload.amount,
                        category:action.payload.category
                    })
                } else{
                    existItem.id=action.payload.id;
                    existItem.title=action.payload.title;
                    existItem.amount=action.payload.amount;
                    existItem.category=action.payload.category;
                    
                }
                const newTotalExpenses = state.expensedetails.reduce((total, expense) => 
                total +parseFloat( expense.amount), 0); 
                console.log("total expense",newTotalExpenses)
                const newShowActivatePremium = newTotalExpenses >= 10000;
                  
               
               
                 state.totalExpenses= newTotalExpenses;
                 state.showActivatePremium= newShowActivatePremium;
                 console.log("new state inside addexpenses",state.expensedetails);
              
                  },
                  replaceExpense(state,action){               
                  const newTotalExpenses = action.payload.expensedetails.reduce((total, expense) => 
                  total +parseFloat( expense.amount), 0);
                  const newShowActivatePremium = newTotalExpenses >= 10000;



                    state.expensedetails=action.payload.expensedetails;
                    state.totalExpenses=newTotalExpenses;
                     state.showActivatePremium= newShowActivatePremium;

               

                  },
                  removeExpenseData(state,action){
                    state.expensedetails=state.expensedetails.filter((item)=>item.id!==action.payload);
                    const newTotalExpenses = state.expensedetails.reduce((total, expense) => 
                    total +parseFloat( expense.amount), 0); 
                    const newShowActivatePremium = newTotalExpenses >= 10000;

                    state.totalExpenses= newTotalExpenses;
                    state.showActivatePremium= newShowActivatePremium;                    
                    state.isChanged=true;    
                    
                  }

               }
})
export const  expenseActions=expenseSlice.actions;

export default expenseSlice.reducer;