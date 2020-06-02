import React from "react"
import Tateti from "./tateti";
import loadTateti from "./apirestTateti"

export default class Jugador extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
        jugador1: "",
        id1: "",
        jugador2: "",
        id2: ""
    }
    }

    render() {
        return (
            <div>
                <label>Jugador</label>
                <input  id="input" value={this.state.jugador} onChange={this.handleChange}></input>
                <button onClick={this.iniciar} >Iniciar</button>
                <label> ID juego: </label>
                <input id="idjuego"> </input>
                <button onClick={this.unirse}> Unirte a la partida</button>
            </div>
        )
    }

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


    handleChange = (event) => {
        let newState ={}
        newState["jugador"] = event.target.value
        this.setState(newState);
        console.log(this.state)
    
        
    
    }

 
    
}