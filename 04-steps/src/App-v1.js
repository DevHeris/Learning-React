import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // This works, but is not the best practice, as it can introduce bugs to our react application

  //   function handleNext() {
  //     if (step < 3) setStep(step + 1);
  //   }

  //   function handlePrev() {
  //     if (step > 1) setStep(step - 1);
  //   }

  // This is a better practice : state updates that depend on some previous state should be performed with the help of a function that's passed to the state-updating function.

  function handleNext() {
    if (step < 3)
      setStep((prevStepValueOrStateValue) => prevStepValueOrStateValue + 1);
  }

  function handlePrev() {
    if (step > 1)
      setStep((prevStepValueOrStateValue) => prevStepValueOrStateValue - 1);
  }

  function isOpenHandler() {
    setIsOpen((currValue) => !currValue);
  }

  return (
    <>
      <button className="close" onClick={isOpenHandler}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
