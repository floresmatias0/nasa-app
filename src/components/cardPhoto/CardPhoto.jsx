import React from "react";

const CardPhoto = ({ id,addFav,props,props:{img_src, sol, camera, rover, earth_date }}) => {

    return(
        <div className="card_photo">
            <button onClick={() => addFav(id,props)}>fav</button>
            <p>distance: {sol}</p>
            <p>camera: {camera.name}</p>
            <p>rover: {rover.name}</p>
            <p>date: {earth_date}</p>
            <img src={img_src} alt="image"/>
        </div>
    )
}

export default CardPhoto;