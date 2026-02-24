// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import RepetitionExercise from "./components/RepetitionExercise"

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    // console.log("button clicked "+ count+ " times");
  }, []);
  
  // const 
  return (
    <div className="App">
      <header className="App-header">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        {/* change below? */}
        <button onClick={() => setCount(count*0)}>Reset</button>
      </header>
    </div>
  );
}

export default App;
