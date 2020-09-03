import {COMPRA_POKEMON, DEVUELVE_POKEMON} from '../types/types';

export const compra_pokemon_action = (cant) => {
    return {
        type: COMPRA_POKEMON,
        payload: {
            cantidad: cant
        }
    }
}

export const devuelve_pokemon_action = (cant) => {
    return {
        type: DEVUELVE_POKEMON,
        payload: {
            cantidad: cant
        }
    }
}