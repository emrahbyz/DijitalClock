import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [timer, setTimer] = useState("00:00:00");

  useEffect(() => {
    setInterval(() => {
      let time = new Date().toLocaleTimeString();
      setTimer(time);
    }, 1000);
  }, []);

  return (
    <div className="App clock-container ">
      <div className="clock">
        <h1>{timer}</h1>
      </div>
    </div>
  );
};

export default App;
