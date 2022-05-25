import React from "react";
import './Reservation.css'


const Reservation = (props) => {

    return (
        <div className="res__box">
            <h3 className="res__name">{props.name}</h3>
            <p>{props.date}</p>
            <p>{props.time} pm</p>
            <p>Number of guests: {props.guests}</p>
            <button onClick={() => props.handleCancelRes(props.id)}>Cancel</button>
        </div>
    )
}

export default Reservation