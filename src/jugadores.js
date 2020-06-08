import React from "react"
<<<<<<< HEAD
import axios from "axios"
import { dispatchTextChange } from "./store";
=======
import Tateti from "./tateti";
import loadTateti from "./apirestTateti"
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8

export default class Jugador extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
<<<<<<< HEAD
        player: "",
        idplayer: "",
        autorizacion: ""
=======
        jugador1: "",
        id1: "",
        jugador2: "",
        id2: ""
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8
    }
    }

    render() {
        return (
            <div>
                <label>Jugador</label>
<<<<<<< HEAD
                <input  id="input" value={this.state.jugador} onChange={this.handleChange}/>
                <button id="registrar" onClick={this.registrar} >Registrar</button>
                
                
        
=======
                <input  id="input" value={this.state.jugador} onChange={this.handleChange}></input>
                <button onClick={this.iniciar} >Iniciar</button>
                <label> ID juego: </label>
                <input id="idjuego"> </input>
                <button onClick={this.unirse}> Unirte a la partida</button>
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8
            </div>
        )
    }

<<<<<<< HEAD
    

    registrar = async () => {
        let name = `name=${this.state.player}`
        const res = await axios.post( "http://localhost:3000/user/new", name)
       
        let newState = {}
        newState = {
            player: this.state.player,
            idplayer: res.data.response,
            autorizacion: res.data.response
        }
        this.setState(newState)
        
        
        dispatchTextChange(this.state.autorizacion)

        
        document.getElementById("registrar").disabled = "disabled" 
        

    }    

    
=======
    iniciar = () => {
        let tateti = loadTateti()
        let input = document.getElementById("input")
        let newState = {}
        newState = {
            jugador1: input.value,
            id: Math.random().toString(),
            tateti: ""
        }
        this.setState(newState)
        console.log(this.state)
        

    }

    unirse = () => {
        idtabla = document.getElementById("idjuego")
        
    
        
    }
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8


    handleChange = (event) => {
        let newState ={}
<<<<<<< HEAD
        newState["player"] = event.target.value
        this.setState(newState);
        
=======
        newState["jugador"] = event.target.value
        this.setState(newState);
        console.log(this.state)
>>>>>>> 54c3f0d5959cd1c627af5f7457a9a7b1cd2259d8
    
        
    
    }

 
    
}