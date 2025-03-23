import React from "react";
import Chart from "./components/Chart";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>Real-Time Analytics Dashboard</h1>
      <div className="chart-container">
        <Chart />
      </div>
    </div>
  );
}

export default App;