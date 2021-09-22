import logo from "./logo.svg";
import "./App.css";
import Clock from "./drafts/Clock";
import Author from "./drafts/Author";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!!</h1>
        <Clock renderClock={false}/>
        <Author github="renatoaps" name="Renato Santana"/>
      </header>
    </div>
  );
}

export default App;
