import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [text, setText] = useState('');

  function handleInput(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:8080/test/${text}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={handleInput}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
