import { useEffect, useState } from "react"
import TimerButton from '../TimerButton/TimerButton'
import './Timer.css'
const Timer = () => {
    let [time,setTime] = useState(0);    
    let [timeOn,setTimeOn] = useState(false)
    
    useEffect(() => { 
        let interval: number | undefined
            if(timeOn){
            interval = window.setInterval(() => {
                setTime(prevTime => prevTime + 10)
            },10)
            
        }else if(!timeOn){
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    } ,[timeOn])


    let startTimer = () => {
        setTimeOn(true);
    }
    let stopTimer = () => {
        setTimeOn(false);
    }
    let resetTimer = () => {
        console.log("Time reset");
        setTime(0);
        setTimeOn(false);
    }

    return (
        <div className="parentTimer">
            <h1>Timer App</h1>
            <div className="TimeDis">
                <span>{("0" +Math.floor((time/ 60000) % 60)).slice(-2)}:</span>
                <span>{("0" +Math.floor((time /1000) % 60 )).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <TimerButton start={startTimer} stop={stopTimer} reset={resetTimer}/>
        </div>
    )
}

export default Timer
