import React from 'react'

function CurrentDate() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
  
  //   console.log(month);
  
    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;
  return (
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
  )
}

export default CurrentDate