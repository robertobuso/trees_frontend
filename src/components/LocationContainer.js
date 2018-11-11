import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

class LocationContainer extends Component {

  state = {
    city: '',
    zip: '',
    region: '',
    lat: '',
    lon: ''
  }

  componentDidMount() {
    fetch('http://ip-api.com/json')
    .then(r => r.json())
    .then(r => this.handleLocation(r))
  }

  handleLocation = (info) => {
   this.setState({
      city: info.city,
      zip: info.zip,
      region: info.region,
      lat: info.lat,
      long: info.lon
    })
  }

  render() {
    return (
      <Container text>
        <Header as='h2'> Locating You </Header>
          <p>
          You live in {this.state.city} in the region of {this.state.region}.
          <br/><br/>
          And your zip code is {this.state.zip}.
          </p>
      </Container>
    )
  }
}

export default LocationContainer;
