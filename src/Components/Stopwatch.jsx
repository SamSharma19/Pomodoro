import './Stopwatch.css';
import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){
     const [isrunning, setisrunning] = useState(false);  // to track if the clock is running or not
     const [time, settime] = useState(0);  //to track the elapsed time
     const [inputs, setInputs] = useState('00:00:00'); //to handle input
     
     useEffect(() => {
        if(time > 0 && isrunning === true) {
            const timer = setTimeout(() => settime(time-1),1000);
            return () => clearTimeout(timer);
        }
     }, [time]);
    
     function start(){
        setisrunning(true);
        if(inputs != '')
        { const [hours, minutes, seconds] = inputs.split(':').map(Number);  //splitting the text to get input in proper format
          settime(hours * 3600 + minutes * 60 + seconds);
          setInputs('');
        }
     }

     function stops(){
        setisrunning(false);
        const [hours, minutes, seconds] = formattime(time).split(':');
        setInputs(`${hours}:${minutes}:${seconds}`);
     }

     function reset(){
        setisrunning(false);
        settime(0);
        setInputs('');
     }

     function formattime(time){
        const getTwoDigitFormat = (num) => num < 10 ? `0${num}` : `${num}`;
        const hours = getTwoDigitFormat(Math.floor(time / 3600));
        const minutes = getTwoDigitFormat(Math.floor((time % 3600) / 60));
        const seconds = getTwoDigitFormat(time % 60);
        return `${hours}:${minutes}:${seconds}`;
        
     }

     const handleinputchange = (event) => {
        setInputs(event.target.value);
      };

     return (
        <div className = "stopwatch-container">
            <span className = "stopwatch">{formattime(time)}</span>
            <label className = "label"> Enter the timer value</label>
            <input value={inputs} input='text' onChange = {handleinputchange} placeholder= 'Enter time in hr:min:sec'></input>
            <div className = "buttons">
                <button className = "startbut" onClick={start}>Start</button>
                <button className = "stopbut" onClick={stops}>Stop</button>
                <button className = "resetbut" onClick={reset}>Reset</button>
            </div>
        </div>
     );
}

export default Stopwatch;