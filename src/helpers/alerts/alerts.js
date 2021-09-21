import Swal from 'sweetalert2';

export const alertAnswerFavStorage = (photo,storage) => {
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
        title: 'Do you want to bookmark this photo?',
        text: "it's a nice photo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!'
      }).then((result) => {
        
        if (result.isConfirmed) {
          let previous = JSON.parse(storage);
          let arr = []

          previous.forEach(element => {
            if(element.id !== photo.id){
              arr.push(element)
              localStorage.clear()
              localStorage.setItem("photos",JSON.stringify(arr.concat(photo))) 
              alertConfirmFav()
            }else{
              Swal.fire({
                customClass: {
                  container: 'container_custom',
                  popup: 'popup_custom',
                  title: 'title_custom_fav',
                  htmlContainer: 'html_custom_fav',
                  actions: 'actions_custom',
                  confirmButton: 'confirm_custom',
                },
                title: 'Oh! Oh!',
                text: 'this photo already exists in your section',
                icon: 'info'
                })
            }
          })     
        }else if(result.dismiss || result.isDenied){
            alertCancelFav()
        }
      })
}

export const alertAnswerFavWithoutStorage = (photo) => {
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
        title: 'Do you want to bookmark this photo?',
        text: "it's a nice photo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, added it!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("photos",JSON.stringify([photo]))
          alertConfirmFav()
        }else if(result.dismiss || result.isDenied){
          alertCancelFav()
        }
      })
}

export const alertCancelFav = () => {
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
        text: 'There are better photos!',
        icon: 'info'
    })
} 

export const alertConfirmFav = () => {
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
        title: 'Added!',
        text: 'Your photo is now in the favorites section',
        icon: 'info'
      })
}

export const alertRemoverFav = (photo,storage,setPhotos) => {
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
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      let previous = JSON.parse(storage);
      let arr = previous.filter((element) => element.id !== photo.id);
      localStorage.clear();
      localStorage.setItem("photos", JSON.stringify(arr));
      arr.length > 0 ? setPhotos(arr) : localStorage.clear(), setPhotos([]);
      alertDeleteFav()
    }else if(result.dismiss || result.isDenied){
      alertCancelFav()
    }
    })
}

export const alertDeleteFav = () => {
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
}