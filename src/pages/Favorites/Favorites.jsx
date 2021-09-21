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
        customClass: {
          container: 'container_custom',
          popup: 'popup_custom',
          title: 'title_custom_fav',
          htmlContainer: 'html_custom_fav',
          actions: 'actions_custom',
          confirmButton: 'confirm_custom',
          cancelButton: 'denied_custom',
        },
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
          Swal.fire({
            customClass: {
              container: 'container_custom',
              popup: 'popup_custom',
              title: 'title_custom_fav',
              htmlContainer: 'html_custom_fav',
              actions: 'actions_custom',
              confirmButton: 'confirm_custom',
              cancelButton: 'denied_custom',
            },
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'info'
          })
        }else if(result.dismiss || result.isDenied){
          Swal.fire({
            customClass: {
              container: 'container_custom',
              popup: 'popup_custom',
              title: 'title_custom_fav',
              htmlContainer: 'html_custom_fav',
              actions: 'actions_custom',
              confirmButton: 'confirm_custom',
            },
            title: 'Good idea!',
            text: 'Your photo is safe.',
            icon: 'info'
          })
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
