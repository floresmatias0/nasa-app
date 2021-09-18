//actions creators
//FETCH GET POKEMON FROM THE SERVER WITCH THUNK
export const GET_POKEMON_REQUEST = "GET_POKEMON_REQUEST";
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
export const GET_POKEMON_FAILURE = "GET_POKEMON_FAILURE";


//las acciones describen que es lo que va a SUCEDER
export function getPokemon(pokemon){
    
    return function (dispatch) {
        dispatch(getPokemonRequest())
        return fetch("https://heroku-api-pokemon.herokuapp.com/pokemons/" + pokemon)
            .then(response => response.json())
            .then(pokemon =>{
                dispatch(getPokemonSuccess(pokemon))
            }).catch((error)=>{
                dispatch(getPokemonFailure(error))
            })
    }
}

export const getPokemonRequest = () =>{
    return {
        type: GET_POKEMON_REQUEST
    }
}

export const getPokemonSuccess = (pokemon) =>{
    return {
        type: GET_POKEMON_SUCCESS,
        payload: pokemon
    }
} 
export const getPokemonFailure = (error) =>{
    return {
        type: GET_POKEMON_FAILURE,
        payload: error
    }
} 