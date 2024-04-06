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
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
}
export default App;
