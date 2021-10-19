import './TimerButton.css'
type PropsTypes = {
    start:() => void;
    stop:() => void;
    reset:() => void;
    
}

const TimerButton = ({start,stop,reset}:PropsTypes) => {
    return (
        <div className="parentButton">
            <button onClick={start}>Start</button>       
            <button onClick={stop}>Stop</button>       
            <button onClick={reset}>Reset</button>       
        </div>
    )
}

export default TimerButton
