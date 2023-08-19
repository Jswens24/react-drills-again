import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [quote, setQuote] = useState('')

  useEffect(
    axios.get('https://api.kanye.rest')
      .then((res) => {
        console.log(res.data.quote)
      })
    , [])

  return (
    <div className="App">
      {quote}
    </div>
  );
}

export default App;
