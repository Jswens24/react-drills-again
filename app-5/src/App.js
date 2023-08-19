import './App.css';
import Image from './Image';

function App() {
  const src = 'https://imageio.forbes.com/specials-images/imageserve/6097d7ee81957044af68d9ce/0x0.jpg?format=jpg&width=1200'

  return (
    <div className="App">
      <Image src={src} />
    </div>
  );
}

export default App;
