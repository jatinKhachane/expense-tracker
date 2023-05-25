import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated !!");
  };

  return (
    <Card class="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update Title</button>
    </Card>
  );
}

export default ExpenseItem;
