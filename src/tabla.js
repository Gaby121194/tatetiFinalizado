import React from "react"
import axios from "axios"
import { connect } from 'react-redux';


export default class Tabla extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
        
        player1: "",
        player2 :"",
        stateGame: "",
        stateCreation: "",
        tateti: {
            cuadro1: null,
            cuadro2: null,
            cuadro3: null,
            cuadro4: null,
            cuadro5: null,
            cuadro6: null,
            cuadro7: null,
            cuadro8: null,
            cuadro9: null,
        },
        currentPlayer : "",
        turnos: 0,
        message: "",
        history1: "",
        history2: "",

        
    }
}

    render() {
        return(
        <div className="cuerpo">

            <div>   
                <h3>Historial jugador1: {this.state.player1} </h3>
                <p> {this.state.history1}</p>
            </div>

            
                <div>
                    <table className="tateti" >
                        <tr >
                            <td id="1" className="cuadro" onMouseOver={this.cambiarColor}
                                onMouseOut={this.sacarColor} onClick={this.ponerMarca}></td>
                            <td id="2" className="cuadro" onMouseOver={this.cambiarColor}
                                onMouseOut={this.sacarColor} onClick={this.ponerMarca}  ></td>
                            <td id="3" className="cuadro" onMouseOver={this.cambiarColor} onMouseOut={this.sacarColor} onClick={this.ponerMarca} ></td>

                        </tr>

                        <tr>
                            <td id="4" className="cuadro" onMouseOver={this.cambiarColor} onMouseOut={this.sacarColor} onClick={this.ponerMarca} ></td>
                            <td id="5" className="cuadro" onMouseOver={this.cambiarColor} onMouseOut={this.sacarColor} onClick={this.ponerMarca}></td>
                            <td id="6" className="cuadro" onMouseOver={this.cambiarColor} onMouseOut={this.sacarColor} onClick={this.ponerMarca}></td>

                        </tr>
                        <tr>
                            <td id="7" className="cuadro" onMouseOver={this.cambiarColor}
                                onMouseOut={this.sacarColor} onClick={this.ponerMarca} ></td>
                            <td id="8" className="cuadro" onMouseOver={this.cambiarColor}
                                onMouseOut={this.sacarColor} onClick={this.ponerMarca}></td>
                            <td id="9" className="cuadro" onMouseOver={this.cambiarColor}
                                onMouseOut={this.sacarColor} onClick={this.ponerMarca}></td>

                        </tr>
                    </table>
                </div>
            
            <div>
                <h3>Historial jugador2: {this.state.player2} </h3>
                <p> {this.state.history2}</p>
            </div>
            
                
            <br/>

            <div>
                {this.state.message}
            </div>

        </div>
    )
    }

    async tick() {
        
        const res = await axios.get("http://localhost:3000/board/" + this.props.id)
       
        let newState = {
            player1: res.data.response.player1,
            player2: res.data.response.player2,
            stateGame: res.data.response.stateGame ,
            stateCreation: res.data.response.stateCreation,
            tateti: {
                cuadro1: res.data.response.cuadro1,
                cuadro2: res.data.response.cuadro2,
                cuadro3: res.data.response.cuadro3,
                cuadro4: res.data.response.cuadro4,
                cuadro5: res.data.response.cuadro5,
                cuadro6: res.data.response.cuadro6,
                cuadro7: res.data.response.cuadro7,
                cuadro8: res.data.response.cuadro8,
                cuadro9: res.data.response.cuadro9,
            },
            currentPlayer: res.data.response.currentPlayer,
            turnos: res.data.response.turnos,
            

        }
        
        this.setState(newState)

        if(this.state.stateGame == "playing" && this.state.currentPlayer== true){
            this.setState({ message: "Comienza el jugador" + this.state.player1})
        }
        else if (this.state.stateGame == "playing" && this.state.currentPlayer== false){
            this.setState({ message: "Comienza el jugador" + this.state.player2})
        }

        if(this.state.stateGame == "ganada" && this.state.currentPlayer == false){
            this.setState({ message: "Ganaste "+ this.state.player1})
        }
        else if (this.state.stateGame == "ganada" && this.state.currentPlayer == true){
            this.setState({ message: "Ganaste "+ this.state.player2}) 
        }
        if(this.state.stateGame == "empatado"){
            this.setState({ message: "Empataron"})
        }
        
        var i;
        for (i = 1; i < 10; i++) {
           if(this.state.tateti[`cuadro${i}`]== "X") {
            document.getElementById(i).className = "cuadro marca1"
           }
           else if(this.state.tateti[`cuadro${i}`]== "O") {
            document.getElementById(i).className = "cuadro marca2"
           }

        };

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }


    ponerMarca = async (event) => {
        let position = event.target.id
        if(this.state.stateCreation == "complete" && this.state.stateGame == "playing"){
            if(this.state.player1 == this.props.authorization && this.state.currentPlayer == true ){
                if(this.state.tateti[`cuadro${position}`]==null){
                    let config = {
                        headers: {
                            'Authorization': this.state.player1,
                        }
                    }
    
                    const res = await axios.put("http://localhost:3000/board/mark/"+ this.props.id, `position=${position}`, config )
                    document.getElementById(position).className = "cuadro marca1"
                    this.setState({ history1: `el Jugador 1 puso una marca en la celda ${position}`})
                    
                    
                }
                else{
                    this.setState({ message: "Esta celda esta ocupada, probar otra..."})
                }
            }
            else if (this.state.player2 == this.props.authorization && this.state.currentPlayer == false){
                if(this.state.tateti[`cuadro${position}`]==null){
                    let config = {
                        headers: {
                            'Authorization': this.state.player2,
                        }
                    }
                    
                    const res = await axios.put("http://localhost:3000/board/mark/"+ this.props.id, `position=${position}`, config )
                    document.getElementById(position).className = "cuadro marca2"
    
                    
                }
                else{
                    this.setState({ message: "Esta celda esta ocupada, probar otra..."})
                }
            }
            else{
                this.setState({ message: "No es tu turno"})
            }
            
        }
        
        
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.idtabla,
        authorization: state.authorization
    }
}
const TablaRedux = connect(
    mapStateToProps
)(Tabla);

export {Tabla, TablaRedux}