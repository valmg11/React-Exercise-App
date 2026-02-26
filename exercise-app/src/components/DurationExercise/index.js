//Valentina Gandolfo
// Duration
import {useState, useEffect, useCallback} from 'react'

import React from "react";


function DurationExercise(props) {
    let [timer, setTimer] = useState(0)
    let [curTime, setCurTime] = useState(0)
    let [time, setTime] = useState(0)
    let [running, setRunning] = useState(false)

    useEffect(() => {
        if(running) {
            let newTimer = setInterval(() =>{setCurTime(prev=>prev+1)}, 1000)
            setTimer(newTimer)
            return () => clearInterval(newTimer)

        }
    }, [running])
    let click = useCallback(
        () => {
            console.log("click" + running)
            if (running) {
                console.log("clearing time")
                setTime(Date.now() - curTime)
                clearInterval(timer)
                setRunning(false)
            } else {
                console.log("starting time")
                setRunning(true)
                setCurTime(Date.now())
                let timer = setInterval(() => setCurTime(prev=>prev+1), 1000/30)
                setTimer(timer)
            }
        }, [running, timer]
    )

    return (
    <div className="App">
        <header className="App-header">
            {/* <p>{props.name[1]} Exercise</p> */}
            <p>Duration Exercise</p>
        <p>{running ? (Date.now()-curTime)/1000 : time/1000}</p>
        <button onClick={click}>{running ? "Stop" : "Start"}</button>

        </header>
    </div>

    );
}

export default DurationExercise