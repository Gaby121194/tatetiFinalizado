import React from "react"
import axios from "axios"
import { dispatchTextChange } from "./store";

export default class Jugador extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
        player: "",
        idplayer: "",
        autorizacion: ""
    }
    }

    render() {
        return (
            <div>
                <label>Jugador</label>
                <input  id="input" value={this.state.jugador} onChange={this.handleChange}/>
                <button id="registrar" onClick={this.registrar} >Registrar</button>
                
                
        
            </div>
        )
    }

    

    registrar = async () => {
        let name = `name=${this.state.player}`
        const res = await axios.post( "http://localhost:3000/user/new", name)
        if (res.data.response.status == 200) {
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
        else {
            this.setState({
                autorizacion: res.data.response
            })

            dispatchTextChange(this.state.autorizacion)
        }
         
        

    }    

    


    handleChange = (event) => {
        let newState ={}
        newState["player"] = event.target.value
        this.setState(newState);
        
    
        
    
    }

 
    
}