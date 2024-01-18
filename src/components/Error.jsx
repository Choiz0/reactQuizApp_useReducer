import React from "react";

const Error = () => {
  return (
    <div className="error-container">
      <h2>Error</h2>
      <p>{errorMessage || "Something went wrong, please try again later."}</p>
    </div>
  );
};

export default Error;
