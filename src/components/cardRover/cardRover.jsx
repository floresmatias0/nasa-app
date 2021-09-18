import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const CardRover = ({photos,props:{name, status, landing_date, launch_date, max_date, max_sol, total_photos, cameras}}) => {

    const [hidden,setHidden] = useState({
        curiosity: false,
        opportunity: false,
        spirit: false,
        perseverance: false
    })

    const handlePhotos = (e,name) => {
        e.preventDefault()
        photos(name)
        console.log(name)
        switch(name){
            case "Curiosity":
                !hidden.curiosity ? setHidden({...hidden, curiosity : true}) : setHidden({...hidden, curiosity : false});
                break;
            case "Opportunity":
                !hidden.opportunity ? setHidden({...hidden, opportunity : true}) : setHidden({...hidden, opportunity : false});
                break;
            case "Spirit":
                !hidden.spirit ? setHidden({...hidden, spirit : true}) : setHidden({...hidden, spirit : false});
                break;
            case "Perseverance":
                !hidden.perseverance ? setHidden({...hidden, perseverance : true}) : setHidden({...hidden, perseverance : false});
                break;
            default:
                break;
        }
        console.log(hidden)
    }
    return (    
        <div className="card_rover"> 
            <Tippy 
                content={ 
                    <div className="info_rover">
                        <p>status: {status}</p>
                        <p>launch date: {launch_date}</p>
                        <p>landing date: {landing_date}</p>
                        <p>max date: {max_date}</p>
                        <p>max sol distance: {max_sol}</p>
                        <p>photos: {total_photos}</p>
                    </div>
                }
            >
                <h2 onClick={(e) => handlePhotos(e,name)}>{name}</h2>
            </Tippy>    
            {hidden.curiosity ?  cameras.map((el,i) => <p key={i}>{el.name}</p>) : 
            hidden.opportunity ? cameras.map((el,i) => <p key={i}>{el.name}</p>) :
            hidden.spirit ? cameras.map((el,i) => <p key={i}>{el.name}</p>) : 
            hidden.perseverance ? cameras.map((el,i) => <p key={i}>{el.name}</p>)  : ""}
        </div>
    )
}

export default CardRover;