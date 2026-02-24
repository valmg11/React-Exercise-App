// import logo from './logo.svg';
import './App.css';
// import {useState, useEffect} from 'react'
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"


function App() {
  // const [count, setCount] = useState(0);

  // useEffect(()=> {
  //   // console.log("button clicked "+ count+ " times");
  // }, []);
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>Repetition Exercise</p>
    //     <span>{count}</span>
    //     <button onClick={() => setCount(count + 1)}>Increase</button>
    //     {/* change below setCount? */}
    //     <button onClick={() => setCount(count*0)}>Reset</button>
    //   </header>
    // </div>
    <RepetitionExercise></RepetitionExercise>

    
    // <DurationExercise></DurationExercise>
  );  
}

export default App;
