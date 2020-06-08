import React from "react"

export default class Tateti extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
        jugador1: "",
        jugador2 :"",
        tateti: new Array(8),
        currentPlayer : ""
    }
    }

    render() {
        return (
            <div className="cuerpo">
                <div> 
                    <h3>Historial jugador1: {this.state.jugador1} </h3>
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
                    <h3>Historial jugador2: {this.state.jugador2}</h3>
                </div>
            </div>
        
        )
    
        
        
        
    }

    // cambiarColor = (event) => {
        
    //     event.target.className = "cuadro celda"
            
    
    // }

    // sacarColor = (event) => {
    //     event.target.className = "cuadro"
    // }

    ponerMarca = (event) => {
       
        let tateti = this.state.tateti
        let newState = {}
        if(this.state.currentPlayer == "jugador1") {
        tateti[event.target.id-1] = "X"
        event.target.className = "cuadro marca1"
    }
        else {
            tateti[event.target.id-1] = "O"
            event.target.className = "cuadro marca2"  
        }
        newState["tateti"] = tateti
        
        console.log(this.state)
    }
    



}
export {Tateti}