import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'


const myInput = document.querySelector('input');
myInput.focus()



function App() {
  const [quote, setQuote] = useState('');
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef();

  const getQuote = () => {
    axios.get('https://api.kanye.rest')
      .then((res) => {
        console.log(res.data.quote)
        setQuote(res.data.quote)
      })
  }


  useEffect(() => {
    getQuote()
  }, [])

  useEffect(() => {
    if (showInput) {
      //focus the thing
      console.log("FOCUSING!")
      inputRef.current.focus()
    }
  }, [showInput])



  return (
    <div className="App">
      <h4>{quote}</h4>
      <button onClick={() => setShowInput(old => !old)}>Show input</button>
      {showInput ? (
        <form>
          <input ref={inputRef} />
        </form>
      ) : null}
    </div>
  );
}

export default App;

