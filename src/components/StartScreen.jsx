import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="startScreen">
      <h2>✨Welcome to the React Quiz! ✨</h2>
      <h3>{numQuestions} question to test your React mastery👨‍🎓</h3>
      <button
        onClick={() => dispatch({ type: "active" })}
        className="btn startbtn"
      >
        Start Quiz🚀
      </button>
    </div>
  );
}

export default StartScreen;
