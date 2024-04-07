/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <br />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the food ?
      </SelectPercentage>
      <br />
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your frind like the food ?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <>
      <label>How much was the bill ? </label>
      <input
        placeholder="Bill Value"
        type="text"
        value={bill}
        onChange={(e) => {
          onSetBill(Number(e.target.value));
        }}
      />
    </>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip){" "}
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
