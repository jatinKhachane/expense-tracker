import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (ExpenseData) => {
    const expense = {
      ...ExpenseData,
      id: Math.random().toString(),
    };
    //send the data further up to <App />
    props.onAddNewExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
