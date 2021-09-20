import React from "react";

const CardPhoto = ({ addFav,removeFav,removeFavorite,props,props:{img_src, sol, camera, rover, earth_date }}) => {
    let date = new Date(earth_date)
    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    return(
        <div className="card_photo" style={{backgroundImage: `url(${img_src})`}}>
            <div className="buttonFav">
                {removeFav ? <button onClick={() => removeFavorite(props)}>REMOVE</button> : <button onClick={() => addFav(props)}>ADD TO FAVORITE</button>}
            </div>
            <div className="description">
                <h4>{date.toLocaleDateString("en-EN", options)}</h4>
                <p>
                    camera: {camera.name}<br/>
                    rover: {rover.name}<br/>
                    sol {sol}
                </p>
            </div>
        </div>
    )
}

export default CardPhoto;