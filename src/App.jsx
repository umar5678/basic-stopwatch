import { useState } from "react";

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState();
  // const [stopBtn, setStopBtn] = useState(false);
  // const [startBtn, setStartBtn] = useState(true);
  // const [resetBtn, setResetBtn] = useState(false);

  const timer = (ms) => {
    const mins = (ms / 60000).toFixed();
    const secs = ((ms % 60000) / 1000).toFixed(2);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(5, "0")}`;
  };

  const hdlStart = () => {
    if (!running) {
      setRunning(true);
      const startTime = Date.now() - time;
      const timerId = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);

      setTimerId(timerId);
      // setStopBtn(true);
      // setStartBtn(false);
      // setResetBtn(true);
    }
  };

  const hdlStop = () => {
    if (running) {
      setRunning(false);
      clearInterval(timerId);
    }
    // setStartBtn(true);
    // setStopBtn(false);
  };

  const hdlReset = () => {
    setRunning(false);
    setTime(0);
    clearInterval(timerId);
  };
  return (
    <>
      <div className="timer">{timer(time)}</div>
      <div className="buttons">
        {/* {startBtn && (
          
        )} */}

        <button className="start" onClick={hdlStart}>
          Start
        </button>
        {/* {stopBtn && (    
        )} */}

        <button className="Stop" onClick={hdlStop}>
          Stop
        </button>

        <button className="Reset" onClick={hdlReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
