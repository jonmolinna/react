const createStore = require('redux').createStore; // import { createStore } from "redux"
const combineReducer = require('redux').combineReducers;

// Types
const COMPRAR_POKEMON = 'COMPRAR_POKEMON';
const DEVOLVER_POKEMON = 'DEVOLVER_POKEMON';
const COMPRAR_YOSHI = 'COMPRAR_YOSHI';
const COMPRAR_SWITCH = 'COMPRAR_SWITCH';

// Actions (Acciones de compra, venta, actualizacion)
const comprar_pokemon_action = (cant) => {
    return {
        type: COMPRAR_POKEMON,
        payload: {
            cantidad: cant
        }
    }
}

const devuelve_pokemon_action = (cant) => {
    return {
        type: DEVOLVER_POKEMON,
        payload: {
            cantidad: cant
        }
    }
}

const comprar_yoshi_action = (cant) => {
    return {
        type: COMPRAR_YOSHI,
        payload: {
            cantidad: cant
        }
    }
}

const comprar_switch_action = (cant) => {
    return {
        type: COMPRAR_SWITCH,
        payload: {
            cantidad: cant
        }
    }
}

// Reducers (Trabajadores del almacen)
// --- Reducer 1
const default_games_state = {
    pokemon: 10,
    yoshi: 12
}

const games_reducer = (state = default_games_state, action) => {
    switch(action.type) {
        case COMPRAR_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload.cantidad
            }
        }
        case DEVOLVER_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload.cantidad
            }
        }
        case COMPRAR_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi - action.payload.cantidad
            }
        }
        default : 
            return state
    }
}

// --- Reducer 2
const default_consoles_state = {
    ps5: 40,
    switch: 30
}

const consoles_reducer = (state = default_consoles_state, action) => {
    switch(action.type) {
        case COMPRAR_SWITCH : {
            return {
                ...state,
                switch: state.switch - action.payload.cantidad
            }
        }
        default : 
            return state
    }
}

/*** Combinando Reducers */
const rootReducers = combineReducer({
    games_reducer,
    consoles_reducer
});

// Store (Almacen de la tienda)
const store = createStore(rootReducers);

console.log('Estado Inicial ', store.getState());


store.subscribe(() => {
    console.log('Cambio de estado: ', store.getState());
});

/*
store.dispatch(comprar_pokemon_action(6));
store.dispatch(devuelve_pokemon_action(8));
store.dispatch(comprar_yoshi_action(2));
*/
store.dispatch(comprar_switch_action(2))

// Para ejecutar
// node "C:\Users\USER\Desktop\redux-3\app.js"