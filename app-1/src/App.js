import React, { useState } from 'react'
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  return (
    <div className="App">
      <input onChange={e => setDisplay(e.target.value)} />
      <h4>{display}</h4>
    </div>
  );
}

export default App;
