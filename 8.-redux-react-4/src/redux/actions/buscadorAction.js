import axios from 'axios';
import {FETCH_POKEMON_FAILURE, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_REQUEST} from '../types/types';

// Actions
export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: {
            pokemon: pokemon
        }
    }
}

export const fetchPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: {
            error: error
        }
    }
}

const fetchPokemon = (valor) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(fetchPokemonSuccess([response.data]));
            })
            .catch(error => {
                dispatch(fetchPokemonFailure('No se encontro el pokemon'))
            })
    }
}

export default fetchPokemon;