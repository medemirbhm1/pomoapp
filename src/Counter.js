import React, { useEffect, useRef, useState } from "react";
import "./counter.css";
function Counter() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [paused, setPaused] = useState(true);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer)
    };
  }, []);

  return (
    <div className="counter">
      <div className="head">
        <button className="selected">Pomodoro</button>
        <button>Short Break</button>
        <button>Long Break</button>
      </div>
      <div className="time">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <button
        className="start"
        onClick={() => {
          setPaused(false);
        }}
      >
        start
      </button>
    </div>
  );
}

export default Counter;
