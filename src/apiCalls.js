const fetchReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
            .then(response => responseCheck(response))
}

const postReservation = ({name, date, time, number}) => {
    return fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            date: date,
            time: time,
            number: number,
            }),
    }).then(response => responseCheck(response))
}

const cancelReservation = (id) => {
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'DELETE',
    }).then(response => responseCheck(response))
}

const responseCheck = (response) => {
    if (response.ok) {
        return response.json()
    }
}

export {fetchReservations, postReservation, cancelReservation}