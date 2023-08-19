import React, { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('')

  const arr = ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']

  const list = arr.map(el => {
    if (el.includes(userInput)) {
      return <h4>{el}</h4>
    }
  })


  return (
    <div className="App">
      <input onChange={e => setUserInput(e.target.value)} />
      {list}
    </div>
  );
}

export default App;
