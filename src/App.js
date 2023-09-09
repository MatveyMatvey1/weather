import './style/App.css';
import React from 'react';

function App() {
  const name = 'Oleg';
  const age = 18;
  return (
    <div ClassName="App">
      <h1>Hello, World!</h1>
      <p>This is a paragraph</p>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>

    </div>
  );
}

export default App;
