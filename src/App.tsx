import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { TextField } from './TextField';

// Ctrl + Spacebar on prop if typescript tels you something is missing
// Hovering over attributes is great when using typescript
// .TSX for React and for normal files .TS

function App() {

  /*return (
    <TextField 
    text="Hello" // from Props type
    person={{firstName: '', lastName: ''}} // from Person type which is passed into Props type
    /> 
  )*/
  return (
    <div className="App">
      <Counter> 
      {(count, setCount) => (
      <div>{count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      )}
      </Counter>
    </div>
  );
}

export default App;
