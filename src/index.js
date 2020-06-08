<<<<<<< HEAD
import { store } from './store';
=======
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Jugador from './jugadores';
<<<<<<< HEAD
import {TatetiRedux} from './juego';
import { Provider } from 'react-redux';
import Tabla from './tabla'
import {TablaRedux} from './tabla'
=======
import Tateti from './tateti';
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8

export default function App() {
  return (
    <main>
<<<<<<< HEAD
      <Provider store={store}>
        

          < Jugador />
      
        
          < TatetiRedux />

          <TablaRedux/>
      </Provider>
=======
      <div>
        < Jugador />
      </div>
      <div>
        < Tateti />
      </div>
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8
    </main>
  )
}

ReactDOM.render(
<<<<<<< HEAD
  
      <App></App>
  ,
=======
    <App></App>,
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8
    document.getElementById('root')
);


