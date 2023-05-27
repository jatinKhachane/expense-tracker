import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (ExpenseData) => {
    const expense = {
      ...ExpenseData,
      id: Math.random().toString(),
    };
    //send the data further up to <App />
    props.onAddNewExpense(expense);
    setIsEditing(false);
  };

  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const onCancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false ? (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
