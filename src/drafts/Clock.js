import ReactDOM from 'react-dom';

function Clock() {
  return <div id="clock"></div>;
}

function tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('clock'));
}

setInterval(tick, 1000);

export default Clock;
