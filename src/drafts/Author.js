import React from 'react';

function Author(props) {
  return (
    <div>
      <h3>Hello, i'm {props.name}! find me at</h3>
      <a href="https://github.com/renatoaps">{props.github}</a>
    </div>
  );
}

export default Author;
