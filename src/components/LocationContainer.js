import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

class LocationContainer extends Component {

  state = {
    city: '',
    zip: '',
    region: '',
    lat: '',
    lon: '',
    trees: []
  }

  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/nwxe-4ae8.json')
    .then(r => r.json())
    .then(r => this.setTrees(r))
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

  setTrees = (trees) => {
    console.log("TREES", trees)
    this.setState({
      trees: trees
    })
  }

  render() {

    return (
      <Container text>
        <Header as='h2'> Locating You </Header>
          <p>
          We have {this.state.trees.length} trees!
          <br/><br/>
          The first tree's common name is {this.state.trees[0] ? this.state.trees[0]['spc_common'] : null}.
          <br/><br/>
          </p>
      </Container>
    )
  }
}

export default LocationContainer;
