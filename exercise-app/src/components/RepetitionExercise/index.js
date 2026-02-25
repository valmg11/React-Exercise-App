//Repetition
import {useState, useEffect} from 'react'
import DurationExercise from "../DurationExercise"


function RepetitionExercise() {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        // console.log("button clicked "+ count+ " times");
    }, [count]);
    return (
    <div className="App">
        <header className="App-header">
        <p>Repetition Exercise</p>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        {/* change below setCount? */}
        <button onClick={() => setCount(count*0)}>Reset</button>
        <DurationExercise></DurationExercise>
        </header>
    </div>

    );
}

export default RepetitionExercise