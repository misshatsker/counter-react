import React from 'react'
import './index.scss';

function App() {
  const [count, setCount] = React.useState(0)

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }

  const onClickReset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Minus</button>
        <button onClick={onClickPlus} className="plus">Plus +</button>
        <button onClick={onClickReset} className="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
