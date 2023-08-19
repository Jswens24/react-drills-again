import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']

  return (
    <div className="App">
      {arr.map(el => {
        return <h4>{el}</h4>
      })}
    </div>
  );
}

export default App;
