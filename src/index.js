import { store } from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Jugador from './jugadores';
import {TatetiRedux} from './juego';
import { Provider } from 'react-redux';
import {TablaRedux} from './tabla'

export default function App() {
  return (
    <main>
      <Provider store={store}>
        

          < Jugador />
      
        
          < TatetiRedux />

          <TablaRedux/>
      </Provider>
    </main>
  )
}

ReactDOM.render(
  
      <App></App>
  ,
    document.getElementById('root')
);


