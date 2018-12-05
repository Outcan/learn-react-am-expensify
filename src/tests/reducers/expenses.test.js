import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense
test("should add an expense", () => {
  const expense = {
    id: 4,
    description: "Coffee",
    note: "",
    amount: 500,
    createdAt: 0
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  console.log([...expenses, expense]);
  expect(state).toEqual([...expenses, expense]);
});

// should edit an expense
test("should edit an expense", () => {
  const updates = {
    ...expenses[0],
    amount: 300
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    updates
  };
  console.log(updates);
  const state = expensesReducer(expenses, action);
  console.log(state);
  expect(state).toEqual([updates, expenses[1], expenses[2]]);
});

test("should edit an expense2", () => {
  const amount = 30000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

// should not edit expense when expense id not found
test("should not edit an expense if id not found", () => {
  const amount = 30000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
