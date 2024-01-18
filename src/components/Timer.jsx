import { useEffect } from "react";

const Timer = ({ timeRemaining, dispatch }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick", payload: timeRemaining - 1 });
    }, 1000);
    return () => clearInterval(timer);
  });

  const min = Math.floor(timeRemaining / 60);
  const sec = timeRemaining % 60;
  return (
    <div className="tick ">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0" && "0"}
      {sec}
    </div>
  );
};

export default Timer;
