import React from "react";
import './AcivatePremiumButton.css'
import { useSelector } from "react-redux";

const makeCSVFile = (items) => {
    const keys = ['id', 'title', 'category', 'amount']; // replace with actual keys
    const header = keys.join(",") + "\n";
    const csv = items.reduce((acc, item) => {
      const values = keys.map(key => item[key]);
      const line = values.join(",") + "\n";
      return acc + line;
    }, '');
    return header + csv;
  };
  

const DownloadExpense = () => {
  const expense = useSelector(state => state.expense.expensedetails);
  const csvData = makeCSVFile(expense);
  const blob = new Blob([csvData], {type: 'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);

  return(
    <a href={url} download="expense.csv">
      <button className="active-button-dashboard" id="a1">Download Expense List</button>
    </a>
  );
}

export default DownloadExpense;
