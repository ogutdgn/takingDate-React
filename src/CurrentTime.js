
import { useState, useEffect } from 'react';

function CurrentTime(){
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDay();

//   console.log(month);

  month = (month < 10) ? "0" + month : month;
  day = (day < 10) ? "0" + day : day;
  
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

    <div style = {{display: "flex", justifyContent: "space-around", backgroundColor: "black", color: "white"}}>
        <div className="date" style = {{display: "flex"}}>
            <div style = {{marginRight: "50px"}}>
                <h1>{day}</h1>
                <h3>Day</h3>
            </div>

            <div style = {{marginRight: "50px"}}>
                <h1>/</h1>
            </div>

            <div style = {{marginRight: "50px"}}>
                <h1>{month}</h1>
                <h3>Month</h3>
            </div>

            <div style = {{marginRight: "50px"}}>
                <h1>/</h1>
            </div>

            <div>
                <h1>{year}</h1>
                <h3>year</h3>
            </div>
        </div>
        <h1>|</h1>
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
    </div>
  );
}
export default CurrentTime;