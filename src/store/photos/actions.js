//actions creators
//FETCH GET POKEMON FROM THE SERVER WITCH THUNK
export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_FAILURE = "GET_PHOTOS_FAILURE";


//las acciones describen que es lo que va a SUCEDER
export function getPokemon(pokemon){
    
    return function (dispatch) {
        dispatch(getPhotosRequest())
        return fetch("https://heroku-api-pokemon.herokuapp.com/pokemons/" + pokemon)
            .then(response => response.json())
            .then(pokemon =>{
                dispatch(getPhotosSuccess(pokemon))
            }).catch((error)=>{
                dispatch(getPhotosFailure(error))
            })
    }
}

export const getPhotosRequest = () =>{
    return {
        type: GET_PHOTOS_REQUEST
    }
}

export const getPhotosSuccess = (pokemon) =>{
    return {
        type: GET_PHOTOS_SUCCESS,
        payload: pokemon
    }
} 
export const getPhotosFailure = (error) =>{
    return {
        type: GET_PHOTOS_FAILURE,
        payload: error
    }
} 