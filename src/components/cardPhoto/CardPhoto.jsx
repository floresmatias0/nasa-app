import React from "react";

const CardPhoto = ({props:{img_src, sol, camera, rover, earth_date}}) => {
    return(
        <div className="card_photo">
            <p>distance: {sol}</p>
            <p>camera: {camera.name}</p>
            <p>rover: {rover.name}</p>
            <p>date: {earth_date}</p>
            <img src={img_src} alt="image"/>
        </div>
    )
}

export default CardPhoto;