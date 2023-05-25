import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <Card class="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update Title</button>
    </Card>
  );
}

export default ExpenseItem;
