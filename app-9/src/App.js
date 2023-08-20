import logo from './logo.svg';
import './App.css';
import RoutesDest from './RoutesDest';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/details'>Details</Link>
      </nav>
      <RoutesDest />
    </div>
  );
}

export default App;
