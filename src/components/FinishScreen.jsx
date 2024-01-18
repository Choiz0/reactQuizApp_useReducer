import React from "react";
const emoji = (percentage) => {
  if (percentage < 50) {
    return "😔";
  } else if (percentage < 70) {
    // Corrected 'elseif' to 'else if'
    return "😐";
  } else {
    return "😁";
  }
};

const FinishScreen = ({ maxPoints, points, dispatch }) => {
  const percentage = Math.round((points / maxPoints) * 100);
  return (
    <div className="finishScreen">
      <h3>Quiz Finished🎉</h3>
      <div>
        You got {points} out of {maxPoints} points
      </div>
      <div>
        That's {percentage}% {emoji(percentage)}
      </div>
      <div className="nextQuestion-wrapper">
        <button
          onClick={() => dispatch({ type: "restart" })}
          className="btn nextBtn"
        >
          ReStart
        </button>
      </div>
    </div>
  );
};

export default FinishScreen;
