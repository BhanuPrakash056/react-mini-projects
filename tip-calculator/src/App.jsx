/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState("0");
  const [friendTip, setFriendTip] = useState("0");
  const finalTip =
    ((bill * Number(tip)) / 100 + (bill * Number(friendTip)) / 100) / 2;
  return (
    <div>
      <Questions
        bill={bill}
        tip={tip}
        friendTip={friendTip}
        setBill={setBill}
        setTip={setTip}
        setFriendTip={setFriendTip}
      />
      {bill !== null ? <Tip bill={bill} tip={finalTip} /> : null}
      <Reset setBill={setBill} setTip={setTip} setFriendTip={setFriendTip} />
    </div>
  );
}

function Questions({ bill, tip, friendTip, setBill, setTip, setFriendTip }) {
  return (
    <div>
      <Question question="How was the bill?">
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </Question>
      <Question question="How did you like the service ?">
        <select value={tip} onChange={(e) => setTip(e.target.value)}>
          <option value="0">Did not like it(0%)</option>
          <option value="10">It is good(10%)</option>
          <option value="20">It is great (20%)</option>
        </select>
      </Question>
      <Question question="How did your friend like the service?">
        <select
          value={friendTip}
          onChange={(e) => setFriendTip(e.target.value)}
        >
          <option value="0">Did not like it(0%)</option>
          <option value="10">It is good(10%)</option>
          <option value="20">It is great (20%)</option>
        </select>
      </Question>
    </div>
  );
}
function Question({ question, children }) {
  return (
    <div>
      <span>{question}</span>
      {children}
    </div>
  );
}

function Tip({ bill, tip }) {
  const totalBill= Number(bill)+tip;
  return (
    <div>
      <p>
        You pay : ${totalBill} (${bill} + ${tip})
      </p>
    </div>
  );
}

function Reset({ setBill, setTip, setFriendTip }) {
  function defaultValues() {
    setBill(0);
    setTip("0");
    setFriendTip("0");
  }
  return <button onClick={defaultValues}>Reset</button>;
}
export default App;
