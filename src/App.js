import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incr = ()=>{
    setCount(count+=1);
  }
  
  const decr =()=>{
    setCount(count-=1);
  }

  
  return (
    <div className="App">
      <h1>the count is {count}</h1>
      <button onClick={incr}>
        +
      </button>
      <button onClick={decr}>
        -
      </button>
    </div>
  );
}

export default App;
