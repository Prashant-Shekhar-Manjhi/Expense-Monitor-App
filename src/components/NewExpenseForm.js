import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  // onChange.....
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  //add-btn...
  const [isEditing, setIsEditing] = useState(false);
  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };

  //submit form to App.js...
  const expenseSubmitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
      id: Math.random().toString(),
    };
    props.onSubmitNewExpense(userInput);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
    setIsEditing(false);
  };

  //Cancel...abs
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="expense-form">
      {!isEditing && (
        <div className="add-new-expense">
          <button className="btn " onClick={addNewExpenseHandler}>
            Add New Expense
          </button>
        </div>
      )}
      {isEditing && (
        <form className="new-expense" onSubmit={expenseSubmitHandler}>
          <div className="form-input">
            <div className="form-title">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                onChange={titleChangeHandler}
                value={newTitle}
              />
            </div>
            <div className="form-amount">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                onChange={amountChangeHandler}
                value={newAmount}
              />
            </div>
            <div className="form-date">
              <label htmlFor="date">Date</label>
              <input type="date" onChange={dateChangeHandler} value={newDate} />
            </div>
          </div>
          <div className="submit-button">
            <button
              className="btn cancel"
              type="button"
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <button className="btn submit" type="submit">
              Add Expense
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default NewExpenseForm;
