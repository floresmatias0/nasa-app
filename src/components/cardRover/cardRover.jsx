import React from 'react';

const CardRover = ({props}) => {

    return (
        <div className="card_rover">
            <h2>{props.name}</h2>
            <p>{props.status}</p>
            <p>{props.Landing_date}</p>
            <p>{props.Launch_date}</p>
            <p>{props.max_date}</p>
            <p>{props.max_sol}</p>
            <p>{props.total_photos}</p>
        </div>
    )
}

export default CardRover;