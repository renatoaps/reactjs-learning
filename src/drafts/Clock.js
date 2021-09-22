import ReactDOM from "react-dom";

function Clock(props) {
  
  if (props.renderClock) {
    return <div id="clock">{setInterval(setClockInterval, 1000)}</div>;
  }else{
    return null;
  }

  function setClockInterval() {
    const element = (
      <div>
        <p>It is {new Date().toLocaleTimeString()}</p>
      </div>
    );

    ReactDOM.render(element, document.getElementById("clock"));
  }
}

export default Clock;
