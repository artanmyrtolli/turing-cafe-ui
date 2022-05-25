import React, { Component } from 'react';
import { fetchReservations, postReservation, cancelReservation } from '../../apiCalls';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import ResForm from '../ResForm/ResForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetchReservations().then(data => 
      this.setState({
        reservations: data
      }))
  }

  handleNewRes = (reservation) => {
    postReservation(reservation).then(data => {
      console.log(data);
      this.setState({
        reservations: [...this.state.reservations, data]
      })
    })
  }

  handleCancelRes = (id) => {
    cancelReservation(id).then(data => {
      console.log(data);
      this.setState({
        reservations: data
      })
    });
  }

  render = () => {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <ResForm handleNewRes={this.handleNewRes} />
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations} handleCancelRes={this.handleCancelRes}/>
        </div>
      </div>
    )
  }
}

export default App;
