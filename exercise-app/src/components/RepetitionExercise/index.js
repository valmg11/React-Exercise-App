//Valentina Gandolfo
//Repetition

import {useState, useEffect} from 'react'
// import DurationExercise from "../DurationExercise"


function RepetitionExercise(props) {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        // console.log("button clicked "+ count+ " times");
    }, [count]);
    return (
    <div className="App">
        <header className="App-header">
        <p>{props.name[0]} Exercise</p>
        {/* <p>Repetition Exercise</p> */}
        <p>{count}</p>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>Increase</button>
                {/* change below setCount? */}
                <button onClick={() => setCount(count*0)}>Reset</button>
                {/* <DurationExercise name></DurationExercise> */}
            </div>
        </header>
    </div>

    );
}

export default RepetitionExercise