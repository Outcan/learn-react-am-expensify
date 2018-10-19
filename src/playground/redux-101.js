import { createStore } from "redux";

// Action generators - functions that return action objects
const incrementCount = (payload = {}) => {
  console.log(payload);
  return {
    type: "INCREMENT",
    incrementBy:
      typeof payload.incrementBy === "number" ? payload.incrementBy : 1
  };
};

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(action);
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: 0
        //count: (state.count = 0)
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

/*store.subscribe(() => {
  console.log(store.getState());
});*/

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

store.dispatch({
  type: "SET",
  count: 101
});
