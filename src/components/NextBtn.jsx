import React from "react";

const NextBtn = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;
  if (index < numQuestions - 1) {
    return (
      <div className="nextQuestion-wrapper">
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="btn nextBtn"
        >
          Next Question
        </button>
      </div>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="btn nextBtn"
        >
          Finish
        </button>
      </div>
    );
  }
};

export default NextBtn;
