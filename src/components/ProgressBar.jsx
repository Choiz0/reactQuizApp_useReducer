import React from "react";

const ProgressBar = ({
  dispatch,
  index,
  maxPoints,
  points,
  numQuestions,
  answer,
}) => {
  return (
    <header>
      <progress
        className="progressBar"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />

      <div className="pointsNumquiz-wrapper">
        {" "}
        <strong>
          {index + 1} / {numQuestions} Quiz
        </strong>
        <strong>
          {" "}
          {points}/ {maxPoints} point
        </strong>
      </div>
    </header>
  );
};

export default ProgressBar;
