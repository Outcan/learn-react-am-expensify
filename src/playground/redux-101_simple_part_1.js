import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
        //count: (state.count = 0)
      };
    default:
      return state;
  }
});

console.log(store.getState());

// Actions - is an object that gets sent to the store

// I'd like to increment the count
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "RESET"
});
// I'd like to decrement the count
store.dispatch({
  type: "DECREMENT"
});

{
  type: "INCREMENT";
}

console.log(store.getState());
