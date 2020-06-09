import React from "react"
import axios from "axios"
import { connect } from 'react-redux';
import { dispatchTextChange } from "./store";



export default class Tateti extends React.Component {
    
    

    constructor(props) {
        super(props);
        this.state = { 
        idBoard: "",
        message: ""
        
        
    }
    }

    


    render() {
        return (
            
            <div>
            <div>
                <label>ID Player: {this.props.text}</label>
                <br></br>
                <label> ID juego: </label>
                <input id="idjuego"/>
                <button id="crear" onClick={this.crear}> Crear partida</button>
                <button id="unirse" onClick={this.unirse}>Unirse a una partida</button>
                
            
            </div>

            <div>
                {this.state.message}
            </div>
            </div>
            
            
        
            
        )
    
        
        
        
    }

    
   

    

    crear = async() =>{
    
        let config = {
            headers: {
                'Authorization': this.props.text,
            }
        }
        
        const res = await axios.post("http://localhost:3000/board/create","", config)
        

        if(res.data.status == 200){
            
            let newState= {
                idBoard: res.data.response.idTable,
                message: "Juego creado... esperando el otro jugador"
                
            }
    
            
    
            this.setState(newState)
            dispatchTextChange(this.props.text, this.state.idBoard)

            
    
            
    
            document.getElementById("idjuego").value = res.data.response.idTable
            document.getElementById("idjuego").disabled = "disabled"
            document.getElementById("unirse").disabled = "disabled"
            document.getElementById("crear").disabled = "disabled"
    
    
            
        }
        else{
            this.setState({
                message: "error: " + res.data.response
            })
        }
        
        
        

        
    }
   
    unirse = async() => {
    
        let idtabla = document.getElementById("idjuego").value
        let config = {
         headers: {
             'Authorization': this.props.text,
         }
     }
     const res = await axios.put("http://localhost:3000/board/join/"+ idtabla,"", config)
     

     if(res.data.status == 200){
        this.setState({message: "Juego completo... empezar a jugar"})
        
        dispatchTextChange(this.props.text, idtabla)
    

        document.getElementById("unirse").disabled = "disabled"
        document.getElementById("crear").disabled = "disabled"
     }

     else {
         this.setState({
             message: "error: " + res.data.response
         })
     }

     

     
     
         
     }

    

    



}

const mapStateToProps = (state) => {
    return {
        text: state.authorization
    }
}
const TatetiRedux = connect(
    mapStateToProps
)(Tateti);


export {Tateti, TatetiRedux}