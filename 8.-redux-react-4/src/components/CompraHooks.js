import React from 'react';
import { useDispatch } from 'react-redux';
import { compra_pokemon_action, devuelve_pokemon_action } from '../redux/actions/gameShopAction';

const CompraHooks = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button 
                className="btn btn-danger btn-sm mb-5 d-block"
                onClick={() => {dispatch(compra_pokemon_action(4))}}
            >
                Compra
            </button>
            <button 
                className="btn btn-danger btn-sm d-block"
                onClick={() => {dispatch(devuelve_pokemon_action(2))}}
            >
                Compra
            </button>
        </div>
    )
}

export default CompraHooks;