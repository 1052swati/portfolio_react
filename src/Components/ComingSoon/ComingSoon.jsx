
import React from "react";
import "./ComingSoon.css";

function ComingSoon({ title, onClose }) {
  return (
    <div className="overlay">
      <div className="box">
        <h2>{title}</h2>
        <p>🚧 Coming Soon 🚧</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ComingSoon;
