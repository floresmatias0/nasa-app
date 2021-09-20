import React, { useEffect, useState } from "react";
import CardPhoto from "../../components/cardPhoto/CardPhoto";
import Swal from 'sweetalert2'

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
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          let previous = JSON.parse(storage);
          let arr = previous.filter((element) => element.id !== photo.id);
          localStorage.clear();
          localStorage.setItem("photos", JSON.stringify(arr));
          arr.length > 0 ? setPhotos(arr) : localStorage.clear(), setPhotos([]);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }else if(result.dismiss || result.isDenied){
          Swal.fire(
            'Good idea!',
            'Your photo is safe.',
            'info'
          )
        }
        })
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
