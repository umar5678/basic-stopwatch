import "./styles/lapList.css";

const LapList = ({ laps, timer }) => {
  return (
    <div className="lap-container">
      <ol reversed>
        {laps.map((lap, index) => (
          <div key={index} className="laps">
            <li>{`${timer(lap)}`}</li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default LapList;
