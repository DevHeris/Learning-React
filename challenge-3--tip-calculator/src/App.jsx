/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);

  return (
    <>
      <BillInput bill={bill} onInput={setBill} />
      <br />
      <SelectPercentage tip={tip} onSelect={setTip} />
      {bill && <p>You pay {`$${bill + tip} ($${bill} + $${tip} tip)`}</p>}
    </>
  );
}

function BillInput({ bill, onInput }) {
  return (
    <>
      <label>How much was the bill ? </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          onInput(Number(e.target.value));
        }}
      />
    </>
  );
}

function SelectPercentage({ tip, onSelect }) {
  const options = [
    { description: "Dissatisfied", percent: 0 },
    { description: "It was okay", percent: 5 },
    { description: "It was good", percent: 10 },
    { description: "Absolutely amazing!", percent: 20 },
  ];

  return (
    <>
      <SelectInput tip={tip} onSelect={onSelect} options={options} who="tipper">
        How did you like the service ?
      </SelectInput>
      <br />
      <SelectInput options={options} tip={tip} onSelect={onSelect} who="friend">
        How did your friend like the service ?
      </SelectInput>
    </>
  );
}

function SelectInput({ options, children, tip, onSelect, who }) {
  function setTipHandler(e) {
    onSelect((curTip) => curTip + Number(e.target.value));
  }
  return (
    <>
      <label>{children}</label>
      <select value={20} onChange={setTipHandler}>
        {options.map((option) => (
          <option value={option.percent} key={option.percent}>
            {option.description} ({option.percent}%)
          </option>
        ))}
      </select>
    </>
  );
}

export default App;

function SelectInput({ options, children, tip, onSelect, who }) {
  function setTipHandler(e) {
    const selectedTip = Number(e.target.value);
    onSelect((curTip) => {
      // Check if the tip is for the tipper or the friend
      if (who === "tipper") {
        return curTip + selectedTip; // Add tip to tipper's tip
      } else {
        return curTip + selectedTip; // Add tip to friend's tip
      }
    });
  }

  return (
    <>
      <label>{children}</label>
      <select value={20} onChange={setTipHandler}>
        {options.map((option) => (
          <option value={option.percent} key={option.percent}>
            {option.description} ({option.percent}%)
          </option>
        ))}
      </select>
    </>
  );
}
