import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

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

  return (
    <Card class="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSaveCurrentFilterYear={saveCurrentFilterYear}
      />
      {/* rendering the expenses data dynamically -- adding Expense react component per expense object in JSX */}
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
