import { useState } from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);

//   const date = new Date("April 4 2024");
//   date.setDate(date.getDate() + count);

//   function nextCountHandler() {
//     setCount((prevCount) => {
//       return prevCount + step;
//     });
//   }

//   function prevCountHandler() {
//     setCount((prevCount) => prevCount - step);
//   }

//   function prevStepHandler() {
//     setStep((prevStep) => prevStep - 1);
//   }

//   function nextStepHandler() {
//     setStep((prevStep) => prevStep + 1);
//   }

//   return (
//     <>
//       <div>
//         <button onClick={prevStepHandler}>-</button>
//         <span>Step:{step}</span>
//         <button onClick={nextStepHandler}>+</button>
//       </div>
//       <br />
//       <div>
//         <button onClick={prevCountHandler}>-</button>
//         <span>Count:{count}</span>
//         <button onClick={nextCountHandler}>+</button>
//       </div>

//       <p>
//         {/* Nested ternary */}
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} days from now is `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </>
//   );
// }

// ================================== //
// version 2
// =============================== //

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("April 4 2024");
  date.setDate(date.getDate() + count);

  function nextCountHandler() {
    setCount((prevCount) => {
      return prevCount + step;
    });
  }

  function prevCountHandler() {
    setCount((prevCount) => prevCount - step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>
      <br />
      <div>
        <button onClick={prevCountHandler}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={nextCountHandler}>+</button>
      </div>

      <p>
        {/* Nested ternary */}
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from now is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}

export default App;
