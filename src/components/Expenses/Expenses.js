import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveCurrentFilterYear = (year) => {
    setFilteredYear(year);
  };

  //filter the expenses -- note don't filter the original props.item which is coming from Apps.js
  //.filter -- It doesn't alters the original array
  //we dont want to update the actual list just because filtering
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  let expeneseContent = <p>No Expenses Found!!</p>;

  if (filteredExpenses.length > 0) {
    expeneseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSaveCurrentFilterYear={saveCurrentFilterYear}
      />
      {/* rendering the expenses data dynamically -- adding Expense react component per expense object in JSX */}
      <Card className="expenses">{}</Card>
      {expeneseContent}
    </div>
  );
}

export default Expenses;
