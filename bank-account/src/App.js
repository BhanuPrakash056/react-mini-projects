import "./App.css";
import { useReducer } from "react";
const initialState = {
  balance: 0,
  isActive: false,
  loan: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance - 50 };
    case "loan":
      return {
        ...state,
        loan: state.loan + 1500,
        balance: state.balance + 1500,
      };
    case "payLoan":
      return { ...state, balance: state.balance - state.loan, loan: 0 };
    case "closeAccount":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}
function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="App">
      <h1>Bank Account using useReducer</h1>
      <h3>balance: {isActive ? balance : "X"}</h3>
      <h3>loan: {isActive ? loan : "X"}</h3>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open Account
        </button>
        <button
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
        >
          deposit 150
        </button>
        <button
          onClick={() => {
            dispatch({ type: "withdraw" });
          }}
        >
          Withdraw 50
        </button>
        <button
          onClick={() => {
            dispatch({ type: "loan" });
          }}
        >
          Request 1500
        </button>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
        >
          Pay Loan
        </button>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={!isActive}
        >
          Close Account
        </button>
      </div>
    </div>
  );
}

export default App;
