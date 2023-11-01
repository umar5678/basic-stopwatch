import "./styles/timerControls.css";

const TimerControls = ({
  onStart,
  onLap,
  onStop,
  onReset,
  onResume,
  running,
  time,
}) => {
  return (
    <div className="buttons">
      {running ? (
        <>
          <button className="lap" onClick={onLap}>
            Lap
          </button>
          <button className="pause" onClick={onStop}>
            Pause
          </button>
        </>
      ) : time === 0 ? (
        <button className="start-btn" onClick={onStart}>
          Start
        </button>
      ) : (
        <>
          <button className="reset" onClick={onReset}>
            Reset
          </button>
          <button className="resume" onClick={onResume}>
            Resume
          </button>
        </>
      )}
    </div>
  );
};

export default TimerControls;
