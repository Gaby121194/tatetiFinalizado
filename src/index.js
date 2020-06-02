import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Jugador from './jugadores';
import Tateti from './tateti';

export default function App() {
  return (
    <main>
      <div>
        < Jugador />
      </div>
      <div>
        < Tateti />
      </div>
    </main>
  )
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);


