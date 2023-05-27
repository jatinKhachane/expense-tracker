import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveCurrentFilterYear = (year) => {
    setFilteredYear(year);
    console.log("from Expenses:", year, filteredYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSaveCurrentFilterYear={saveCurrentFilterYear}
      />
      {/* rendering the expenses data dynamically -- adding Expense react component per expense object in JSX */}
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
