import {FETCH_POKEMON_FAILURE, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_REQUEST} from '../types/types';

const initialState = {
    loading: false,
    pokemon: [],
    error: ''
}

const buscador = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload.pokemon,
                error: ''
            }
        case FETCH_POKEMON_FAILURE:
            return {
                loading: false,
                pokemon: [],
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default buscador;