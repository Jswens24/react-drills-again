import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    axios.get('https://api.kanye.rest')
      .then((res) => {
        console.log(res.data.quote)
        setQuote(res.data.quote)
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(
    getQuote()
  )

  return (
    <div className="App">

    </div>
  );
}

export default App;

