import React, { Component } from 'react';
import TreesContainer from './TreesContainer'
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
    .then(r => console.log('NEW LOCATION', r))
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
          LOCATION
          <br/><br/>
          LOCATION TWO
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
