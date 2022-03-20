
import { useState, useEffect } from 'react';

function CurrentTime(){
  
  
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
        <div className="time" style = {{display: "flex"}}>
            <div style = {{marginRight: "50px"}}>
                <h1>{date.toLocaleTimeString()[0]}{date.toLocaleTimeString()[1]}</h1>
                <h3>hour</h3>
            </div>

            <div style = {{marginRight: "50px"}}>
                <h1>:</h1>
            </div>

            <div style = {{marginRight: "50px"}}>
                <h1>{date.toLocaleTimeString()[3]}{date.toLocaleTimeString()[4]}</h1>
                <h3>minute</h3>
            </div>

            <div style = {{marginRight: "50px"}}>
                <h1>:</h1>
            </div>

            <div>
                <h1>{date.toLocaleTimeString()[6]}{date.toLocaleTimeString()[7]}</h1>
                <h3>second</h3>
            </div>
        </div>
  );
}
export default CurrentTime;