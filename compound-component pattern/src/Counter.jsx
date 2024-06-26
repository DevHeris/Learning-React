import { createContext, useContext, useState } from "react";

// 1. Create a context
const CounterContext = createContext();

// 2.Create a parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);

  return (
    <CounterContext.Provider value={{ increase, decrease, count }}>
      {children}
    </CounterContext.Provider>
  );
}

// 3. Create child components to help implement the common tasks
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

// 4. Add child components as properties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
