import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          step={1}
          max={8}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
    </section>
  );
};
export default App;
