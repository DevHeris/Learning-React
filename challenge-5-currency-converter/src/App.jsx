// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [output, setOutput] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchResult() {
      const resp = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
        { signal: controller.signal }
      );

      const { rates } = await resp.json();

      if (!rates) return;

      const rate = rates[to];

      setOutput(rate);
    }

    fetchResult();

    return () => {
      controller.abort();
    };
  }, [amount, from, to]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      {output && (
        <p>
          {output} {to}
        </p>
      )}
    </div>
  );
}
