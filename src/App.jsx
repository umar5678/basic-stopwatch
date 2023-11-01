import { useState } from "react";
import "./App.css";
import TimerDisplay from "./components/TimerDisplay";
import LapList from "./components/LapList";
import TimerControls from "./components/TimerControls";

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState();
  const [laps, setLaps] = useState([]);

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
    }
  };

  const hdlStop = () => {
    if (running) {
      setRunning(false);
      clearInterval(timerId);
    }
  };

  const hdlReset = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
    clearInterval(timerId);
  };

  const hdlResume = () => {
    if (!running && time !== 0) {
      const startTime = Date.now() - time;
      const timerId = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
      setTimerId(timerId);
      setRunning(true);
    }
  };

  const hdlLap = () => {
    if (running) {
      setLaps([time, ...laps]);
    }
  };

  return (
    <div className="app">
      <TimerDisplay time={time} timer={timer} />

      <LapList laps={laps} timer={timer} />

      <TimerControls
        running={running}
        time={time}
        onStart={hdlStart}
        onLap={hdlLap}
        onReset={hdlReset}
        onResume={hdlResume}
        onStop={hdlStop}
      />
    </div>
  );
};

export default App;
