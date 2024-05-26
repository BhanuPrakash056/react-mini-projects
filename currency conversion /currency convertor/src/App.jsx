import { useEffect, useState } from "react";

export default function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [currency, setCurrency] = useState(0);
  const [converted, setConverted] = useState();
  function handleFrom(e) {
    setFrom(e.target.value);
  }
  function handleTo(e) {
    setTo(e.target.value);
  }
  function handleCurrencyChange(e) {
    setCurrency(e.target.value);
    console.log(currency)
  }
  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${currency}&from=${from}&to=${to}`
        );
        const data = await res.json();
        console.log(data);
        setConverted(data?.rates[to]);
      }
      fetchData();
    },
    [from, to, currency]
  );

  return (
    <div>
      <input type="text" value={currency} onChange={handleCurrencyChange} />
      <select value={from} onChange={handleFrom}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={handleTo}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
      {converted}
    </div>
  );
}
