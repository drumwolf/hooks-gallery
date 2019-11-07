import React, { useState, useEffect } from 'react';
import './App.css';

const AppBtn = props => {
  return  <div className="App-count">{props.count}</div>;
}

const App = () => {
  let [count, setCount] = useState(0);
  let [max, setMax] = useState(7);

  const incrementCount = (inc) => {
    setCount( (count + inc + max) % max );
  };

  return (
    <div className="App">
      <AppBtn count={count} />
      <button className="App-btn" onClick={ incrementCount.bind(this, -1) }> - </button>
      <button className="App-btn" onClick={ incrementCount.bind(this, 1) }> + </button>
    </div>
  );
}

export default App;
