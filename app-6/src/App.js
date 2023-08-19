import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [userInput, setUserInput] = useState('');

  const clickHandler = () => {
    setTaskList(currentValue => {
      return [...currentValue, userInput]
    })
  }

  return (
    <div className="App">
      <input onChange={e => setUserInput(e.target.value)} placeholder='Enter a new task' />
      <button onClick={clickHandler}>Add</button>
      <Todo taskList={taskList} />
    </div>
  );
}

export default App;
