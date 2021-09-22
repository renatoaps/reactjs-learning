import ReactDOM from 'react-dom';

function Clock() {
  return <div id="clock"></div>;
}

function setClockInterval() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('clock'));
}

setInterval(setClockInterval, 1000);

export default Clock;
