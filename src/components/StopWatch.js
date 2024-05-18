import { useRef, useState } from "react";

const StopWatch = () => {
  const TIMEOUT = 1000;
  const [isPause, setPause] = useState(false);
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);
  const onStart = () => {
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, TIMEOUT);
  };
  const onStop = () => {
    clearInterval(timeRef.current);
  };
  const onPause = () => {
    clearInterval(timeRef.current);
    setPause(true);
  };
  const onResume = () => {
    if (time !== 0) {
      onStart();
    }
    setPause(false);
  };
  const onReset = () => {
    clearInterval(timeRef.current);
    setTime(0);
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {time} seconds</p>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      {!isPause ? (
        <button onClick={onPause}>Pause</button>
      ) : (
        <button onClick={onResume}>Resume</button>
      )}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
export default StopWatch;
