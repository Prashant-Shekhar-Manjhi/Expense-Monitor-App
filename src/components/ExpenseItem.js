import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item-title">
        <ExpenseDate date={props.date} />
        <h3 className="expense-title">{props.title}</h3>
      </div>

      <h3 className="expense-price">${props.amount}</h3>
    </div>
  );
}
