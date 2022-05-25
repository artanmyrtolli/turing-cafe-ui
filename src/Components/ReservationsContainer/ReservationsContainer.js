import React from 'react'
import './ReservationsContainer.css'
import Reservation from '../Reservation/Reservation'

const ReservationsContainer = (props) => {
    if (!props.reservations.length) {
        return (
            <h2 className='empty-res-header'>No reservations yet!</h2>
        )
    }
        return props.reservations.map(res => {
            return (
                    <Reservation 
                        key={res.id}
                        id={res.id}
                        name={res.name}
                        date={res.date}
                        time={res.time}
                        guests={res.number} 
                        handleCancelRes={props.handleCancelRes}/>

            )
        })
}

export default ReservationsContainer