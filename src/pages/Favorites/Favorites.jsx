import React, { useEffect, useState } from "react";
import CardPhoto from "../../components/cardPhoto/CardPhoto";
import { alertRemoverFav } from "../../helpers/alerts/alerts";

const Favorites = () => {
  const [photos, setPhotos] = useState([]);
  var storage = localStorage.getItem("photos");

  useEffect(() => {
    if (storage) {
      let aux = JSON.parse(storage);
      setPhotos(aux);
    }
  }, [storage]);

  const removeFavorite = (photo) => {
    let storage = localStorage.getItem("photos");
    if (storage) {
      alertRemoverFav(photo,storage,setPhotos)
      return;
    }
  };

  return (
    <div className="container_fav">
      <h1>Favorites</h1>
      {photos && photos.length > 0 ? (
        <div className="container_cards">
          {photos.map((photo, i) => (
            <CardPhoto
              props={photo}
              key={i}
              removeFav={true}
              removeFavorite={removeFavorite}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Favorites;
