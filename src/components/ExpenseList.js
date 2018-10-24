import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";

import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense, index) => (
      <ExpenseListItem key={index} {...expense} />
    ))}

    {props.expenses.length}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);

// Less used pattern - showing how it works
/*const ConnectedExpenseList = connect(state => {
  return {
    expenses: state.expenses
  };
})(ExpenseList);

export default ConnectedExpenseList;*/
