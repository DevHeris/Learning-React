import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducerFunc(curState, action) {
  switch (action.type) {
    case "dec":
      return { ...curState, count: curState.count - curState.step };
    case "inc":
      return { ...curState, count: curState.count + curState.step };
    case "setCount":
      return { ...curState, count: action.payload };
    case "setStep":
      return { ...curState, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("unknown action");
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("april 26 2024");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
