import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList(props) {
  const [filterYear, setFilterYear] = useState("2021");
  const filterYearChangeHandler = (event) => {
    setFilterYear(event.target.value);
  };
  //Filter Array...
  const filteredYear = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let content = <h3 className="no-record">No record found.</h3>;
  if (filteredYear.length > 0) {
    content = filteredYear.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      );
    });
  }

  return (
    <>
      <div className="expense-list">
        <div className="select-year">
          <h3>Filter by Year</h3>
          <select
            name="year"
            id="year"
            onChange={filterYearChangeHandler}
            value={filterYear}
          >
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>
        {content}
      </div>
    </>
  );
}
