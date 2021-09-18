import { API_ROVERS_URL, API_NASA_KEY } from "../../_env";

export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_FAILURE = "GET_PHOTOS_FAILURE";

export const getPhotosByToday = () => {
    return async (dispatch) =>{
        let newDate = new Date();
        let day = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        let today = `${year}-${month + 1}-${day - 1}`;

        dispatch(getPhotosRequest());
        return fetch(`${API_ROVERS_URL}/curiosity/photos?earth_date=${today}&api_key=${API_NASA_KEY}`)
          .then((response) => response.json())
          .then((photos) => {
              dispatch(getPhotosSuccess(photos));
          })
          .catch((error) => {
            dispatch(getPhotosFailure(error));
          });
      };
}

export const getPhotos = (rover) => {
  return async (dispatch,getState) =>{
    dispatch(getPhotosRequest());
    return fetch(`${API_ROVERS_URL}/${rover}/photos?sol=1&api_key=${API_NASA_KEY}`)
      .then((response) => response.json())
      .then((photos) => {
        console.log(getState().rovers.content)
        dispatch(getPhotosSuccess(photos));
      })
      .catch((error) => {
        dispatch(getPhotosFailure(error));
      });
  };
}

export const getPhotosByCamera = (rover,cam) => {
  return async (dispatch,getState) =>{
    dispatch(getPhotosRequest());
    return fetch(`${API_ROVERS_URL}/${rover}/photos?sol=1&camera=${cam}&api_key=${API_NASA_KEY}`)
      .then((response) => response.json())
      .then((photos) => {
        console.log(getState().rovers.content)
        dispatch(getPhotosSuccess(photos));
      })
      .catch((error) => {
        dispatch(getPhotosFailure(error));
      });
  };
}

export const getPhotosRequest = () => {
  return {
    type: GET_PHOTOS_REQUEST,
  };
};

export const getPhotosSuccess = (photos) => {
  return {
    type: GET_PHOTOS_SUCCESS,
    payload: photos,
  };
};
export const getPhotosFailure = (error) => {
  return {
    type: GET_PHOTOS_FAILURE,
    payload: error,
  };
};
