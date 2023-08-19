import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import { List } from './List';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [userInput, setUserInput] = useState([]);

  return (
    <div className="App">
      <NewTask setTaskList={setTaskList} userInput={userInput} setUserInput={setUserInput} />
      <List taskList={taskList} />
    </div>
  );
}

export default App;
