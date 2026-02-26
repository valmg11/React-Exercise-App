//Valentina Gandolfo
// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"


function App() {
  let names = ["Repetition", "Duration"];

  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  }
// console.log(selectedButton)
  // if (selectedButton.) {
  //   console.log()
  // }

  return (
    // <button onClick={() => <RepetitionExercise></RepetitionExercise>}>Repetition</button>
    // <RepetitionExercise name></RepetitionExercise>
    
    <div className="App">
      <header className="App-header">
        <div>{selectedButton}</div>
        <div className="buttons">
          <button onClick={() => handleClick(<RepetitionExercise name={names}/>)}>Repetition Exercise</button>
          <button onClick={() => handleClick(<DurationExercise name={names}/>)}>Duration Exercise</button>
        </div>
      </header>
    </div>

  );  
}

export default App;
