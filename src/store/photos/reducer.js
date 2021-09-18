import {
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAILURE,
} from './actions'

//GENERA UN NUEVO ESTADO Y  **PISA** EL ANTERIOR
const initialState = {
    content: [],
    contentLoading: true,
    contentError:"",  
}
    
const photosReducer = (state = initialState, action) => {

    switch(action.type){

        // case GET_POKEMON_REQUEST:
        //     return {
        //         ...state,
        //         pokemonLoading:true
        //     }
        // case GET_POKEMON_SUCCESS:
        //     return {
        //         ...state,
        //         pokemonLoading: false,
        //         pokemon: state.pokemon.concat(action.payload)
        //     }
        // case GET_POKEMON_FAILURE :
        //     return {
        //         ...state,
        //         pokemonError: "Error 404 not found",
        //         pokemonLoading: false,
        //     }
        default :
            return state;
    }
        
};

export default photosReducer;