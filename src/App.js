import React, { useState, useEffect } from 'react';

const Timer = () => {
 const [time, setTime] = useState(0);
 const [timerOn, setTimerOn] = useState(false);

 useEffect(() => {
   let interval;
   if (timerOn) {
     interval = setInterval(() => {
       setTime((prevTime) => prevTime + 1);
     }, 1000);
   } else {
     clearInterval(interval);
   }
   return () => clearInterval(interval);
 }, [timerOn]);

 const startTimer = () => {
   setTimerOn(true);
 };

 const stopTimer = () => {
   setTimerOn(false);
 };

 const resetTimer = () => {
   setTime(0);
   setTimerOn(false);
 };

 return (
   <div>
     <h1><span style={{fontWeight: 'bold'}}>Timer:</span> {Math.floor(time / 60)} mins {time % 60} secs</h1>
     <div>
       <button style={{backgroundColor: 'green', color: 'white'}} onClick={startTimer}>Start</button>
       <button style={{backgroundColor: 'red', color:'white'}} onClick={stopTimer}>Stop</button>
       <button style={{backgroundColor: 'yellow', color: 'black'}} onClick={resetTimer}>Reset</button>
     </div>
   </div>
 );
};

export default Timer;

