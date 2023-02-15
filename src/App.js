import { useState } from "react";
import data from './data';

function App() {

  const[count , setCount] = useState(0);
  const[text , setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0) {
      amount = 1 
    }
    if (count > 4) {
      amount = 4 
    }
    setText(data.slice(0,amount));
  }

  return (
    <div className="section-center">
      <h4>Random Facts</h4>
      <form className="lorem" onSubmit={handleSubmit}>
        <label htmlFor="total">number of paragraphs : </label>

        <input 
        type="number" 
        name="total"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">Generate</button>
    <article className="lorem-text">
      {text.map((item) => {
        return <p>{item}</p>
      })}
    </article>
      </form>
    </div>
  );
}

export default App;
