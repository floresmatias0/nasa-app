import React,{ useEffect,useState } from 'react'
import CardPhoto from '../../components/cardPhoto/CardPhoto';

const Favorites = () => {

    const [photos, setPhotos] = useState([])
    var storage = localStorage.getItem("photos")

    useEffect(() => {
        if(storage){
            let aux = JSON.parse(storage)
            setPhotos(aux)
        }
    },[storage])

    const removeFavorite = (photo) => {

        let storage = localStorage.getItem("photos")
        if(storage){
            let previous = JSON.parse(storage);
            let arr = previous.filter(element => element.id !== photo.id)
            localStorage.clear()
            localStorage.setItem("photos",JSON.stringify(arr))
            arr.length > 0 ? setPhotos(arr) : localStorage.clear(), setPhotos([])
            return
        }else{
          localStorage.setItem("photos",JSON.stringify([photo]))
        }
    }

    return(
        <div>
           <h1>favorites</h1> 
           {photos && photos.length > 0 ? (
               photos.map((photo,i) => <CardPhoto props={photo} key={i} removeFav={true} removeFavorite={removeFavorite}/>)
           ) : (<></>)}   
        </div>
    )
}

export default Favorites;