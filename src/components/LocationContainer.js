import React, { Component } from 'react';
import TreesContainer from './TreesContainer'
import { Container, Header } from 'semantic-ui-react'

class LocationContainer extends Component {

  state = {
    city: '',
    zip: '',
    region: '',
    lat: 0,
    lon: 0
  }

  componentDidMount() {
    this.getLocation()
  }

 getLocation = () => {
   const geolocation = navigator.geolocation
      if (geolocation) {
        geolocation.getCurrentPosition((position) => this.showPosition(position))
      } else {
          alert("Geolocation is not supported by this browser.")
      }
  }

  showPosition = (position) => {
    console.log('POSITION: ', position)
      this.setState({  lat: position.coords.latitude, lon: position.coords.longitude
      })
  }

  handleLocation = (info) => {
   this.setState({
      city: info.city,
      zip: info.zip,
      region: info.region,
      lat: info.lat,
      lon: info.lon
    })
  }

  render() {
    return (
      <div>
      <Container text>
        <Header as='h2'> Locating You </Header>
          <p>
          Your latitude is {this.state.lat}
          <br/><br/>
          And your longitude is {this.state.lon}
          <br/><br/>
          </p>
      </Container>
      <br/>
      <TreesContainer />
       </div>
    )
  }
}



export default LocationContainer;
