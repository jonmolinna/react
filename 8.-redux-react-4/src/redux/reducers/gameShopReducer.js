import {COMPRA_POKEMON, DEVUELVE_POKEMON} from '../types/types';

const default_game_shop = {
    pokemon: 70
};

const game_shop = (state = default_game_shop, action) => {
    switch(action.type){
        case COMPRA_POKEMON : {
            return {
                ...state,
                pokemon: state.pokemon - action.payload.cantidad
            }
        }
        case DEVUELVE_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload.cantidad
            }
        }
        default: 
            return state;
    }
}

export default game_shop;