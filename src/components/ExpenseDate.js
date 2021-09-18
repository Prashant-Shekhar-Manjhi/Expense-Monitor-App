import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const year = props.date.getFullYear().toString();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <h3 className="month">{month}</h3>
      <h3 className="year">{year}</h3>
      <h3 className="day">{day}</h3>
    </div>
  );
}
