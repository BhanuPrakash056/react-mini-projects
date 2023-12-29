/* eslint-disable react/prop-types */
import "./App.css";

function App() {
  return (
    <div>
      <Questions />
    </div>
  );
}

function Questions() {
  return (
    <div>
      <Question question="How was the bill?">
        <input type="text" />
      </Question>
      <Question question="How did you like the service ?">
        <select>
          <option>Did not like it(0%)</option>
          <option>It is good(10%)</option>
          <option>It is great (20%)</option>
        </select>
      </Question>
      <Question question="How did your friend like the service?">
        <select>
          <option>Did not like it(0%)</option>
          <option>It is good(10%)</option>
          <option>It is great (20%)</option>
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
export default App;
