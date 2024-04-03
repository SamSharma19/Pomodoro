import React, {useState, useEffect} from 'react';
import './Clock.css';

function Clock(){
     const [time, setTime] = useState(new Date());
     
     useEffect(() => {
        const intervalId = setInterval(() => {
         setTime(new Date());
        }, 1000);
 
        return () => {
           clearInterval(intervalId);
        }
     }, []);
     
     function formattime(){
         let hours = time.getHours();
         let mins = time.getMinutes();
         let seconds = time.getSeconds();
         const meridiem = hours>=12 ? "PM" : "AM";
         hours = hours%12 || 12;
         if(mins < 10)
           mins = '0'+mins;
         if(seconds < 10)
           seconds = '0' + seconds;
         return `${hours}:${mins}:${seconds}:${meridiem}`;
     }
 
 
     return (
         <div className = "clock-container">
            <div className = "clock">
               <span>{formattime()}</span>
            </div>
         </div>
     );
 }

export default Clock;