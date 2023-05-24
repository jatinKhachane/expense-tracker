import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>May 2023</div>
      <div className="expense-item__description">
        <h2>Mobile Recharge</h2>
        <div className="expense-item__price">Rs 200</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
