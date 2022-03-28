import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
export {Header, Contador};

let timer = null; 

function Header() {
  return (
    <>
      <header className="header">
        <img className="header-logo" src={logo}/>
        <h1 className="header-title">YahClick!</h1>
        <span
          className="timer"
          id="timer"
        >
          15
        </span>
      </header>
    </>
  );
}

let timerOut = null;

function Contador () {
  const [valueCounter, changeValueCounter] = useState(0)
  const [mode, changeMode] = useState("Start");
  const [modal, showModal] = useState(false);
  if (modal)
  {
    return (
      <div className='back-modal'>
        <main className='main modal'>
          <h2 className='main-text'>GameOver</h2>
          <h4 className='main-text'>Score</h4>
          <p className='main-text'>{valueCounter}</p>
        </main>
      </div>
    );
  }
  return (
    <main className='main play'>
      <div className='main-input main-text'>{valueCounter}</div>
      <input
        className='main-input button'
        type='button'
        value='Reset'
        onClick={() => {
          timer = document.getElementById("timer");
          changeValueCounter(0);
          timer.classList.remove("on");
          changeMode("Start");
          if (timerOut) clearInterval(timerOut);
          timer.textContent = 15;
        }}
      />
      <input
        className='main-input button'
        type='button'
        value={mode}
        onClick={() => {
          if (mode === "Start"){
            timer = document.getElementById("timer");
            changeValueCounter(0);
            timer.classList.add("on");
            timerOut = setInterval(() => {
              timer.textContent -= 1;
              if (timer.textContent == 0)
              {
                timer.classList.remove("on");
                clearInterval(timerOut);
                showModal(true);
              }
                
            }, 500)
            changeMode("Click");
          }
          else
            changeValueCounter(valueCounter + 1);
        }}
        onMouseMove={() => {
          changeValueCounter(valueCounter + 1);
        }}
      />
    </main>
  );
}
