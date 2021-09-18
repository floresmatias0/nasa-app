import { API_KEY } from '../../_env'
export const GET_ROVERS_REQUEST = "GET_ROVERS_REQUEST";
export const GET_ROVERS_SUCCESS = "GET_ROVERS_SUCCESS";
export const GET_ROVERS_FAILURE = "GET_ROVERS_FAILURE";

export function getRovers(){
    return async (dispatch) => {
        dispatch(getRoversRequest())
        return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(rovers =>{
                dispatch(getRoversSuccess(rovers))
            }).catch((error)=>{
                dispatch(getRoversFailure(error))
            })
    }
}

export const getRoversRequest = () =>{
    return {
        type: GET_ROVERS_REQUEST
    }
}

export const getRoversSuccess = (rovers) =>{
    return {
        type: GET_ROVERS_SUCCESS,
        payload: rovers
    }
} 
export const getRoversFailure = (error) =>{
    return {
        type: GET_ROVERS_FAILURE,
        payload: error
    }
} 