import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import Author from "./components/Author";
import React from "react";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!!</h1>
        <Toggle />
      </header>
    </div>
  );
}

export default App;
