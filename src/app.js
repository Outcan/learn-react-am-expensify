import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  //console.log(state);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 150000,
    createdAt: 1000
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 500000,
    createdAt: 1000
  })
);

const search = store.dispatch(setTextFilter("bill"));
const search2 = store.dispatch(setTextFilter("gas"));

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
