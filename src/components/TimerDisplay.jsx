import "./styles/timerDisplay.css";

const TimerDisplay = ({ time, timer }) => {
  return (
    <div className="timer">
      <span>{timer(time)}</span>
    </div>
  );
};

export default TimerDisplay;
