import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item-date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item-title">
        <h3 className="expense-title">{props.title}</h3>
      </div>
      <div className="expense-item-amount">
        <h3 className="expense-price">${props.amount}</h3>
      </div>
    </div>
  );
}
