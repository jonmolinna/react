import React, { Component } from 'react';
import { connect } from 'react-redux';

// Importando las Acciones
import { compra_pokemon_action, devuelve_pokemon_action } from '../redux/actions/gameShopAction';

class Comprar extends Component {
    render(){
        return (
            <div>
                <button 
                    className="btn btn-success btn-sm mb-4 d-block"
                    onClick={() => {this.props.compra_pokemon_action(12)}}
                >
                    Comprar
                </button>
                <button 
                    className="btn btn-success btn-sm d-block"
                    onClick={() => {this.props.devuelve_pokemon_action(10)}}
                >
                    Devolver
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    compra_pokemon_action,
    devuelve_pokemon_action
}

export default connect(null, mapDispatchToProps)(Comprar);
// null => parametro de los estados, aqui no hay