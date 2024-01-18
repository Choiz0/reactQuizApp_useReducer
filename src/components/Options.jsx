import React from "react";

export const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div className="option-wrapper">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn optionBtn ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correctBtn"
                  : "wrongBtn"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswered}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
