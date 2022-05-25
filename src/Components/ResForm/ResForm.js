import React from "react";

const ResForm = (props) => {
    let newRes = {
        name: '',
        date: '',
        time: '',
        number: ''
    }
    return (
        <div className="resy-form">
            <input type='text' placeholder="Name" onChange={event => newRes.name = event.target.value}/>
            <input type='text' placeholder="Date (mm/dd)" onChange={event => newRes.date = event.target.value}/>
            <input type='text' placeholder="Time" onChange={event => newRes.time = event.target.value}/>
            <input type='text' placeholder="Number of guests" onChange={event => newRes.number = event.target.value}/>
            <button onClick={() => props.handleNewRes(newRes)}>Make Reservation</button>
        </div>
    )
}

export default ResForm