import React, { Component } from 'react';
import TreesContainer from './TreesContainer'
import MapContainer from './MapContainer'
import {findTrees, findImage} from '../adapters/index.js'
import { Container, Header, Grid, Responsive } from 'semantic-ui-react'
require('dotenv').config()


class LocationContainer extends Component {

  state = {
    lat: 0,
    lon: 0,
    trees: [],
    markerLat: 0,
    markerLon: 0
  }

  componentDidMount() {
    this.getLocation()
    findImage()
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
      this.setState({ lat: position.coords.latitude, lon: position.coords.longitude
      }, () => {
        findTrees(this.state.lat, this.state.lon)
        .then(trees => this.setTrees(trees))
      })
  }

  setTrees = (trees) => {
    this.setState({
      trees: trees
    })
  }

  handleCardClick = (lat, lon) => {
    this.setState({
      markerLat: lat,
      markerLon: lon
    })
  }

  render() {
    return (
      <div>
      <Container fluid text>
        <Header as='h1'> A Tree Grows In... {this.state.trees[1] ? this.state.trees[1].nta_name: null}</Header>
      </Container>
      <br/>
      <Grid doubling columns={2} style={{
        width: "100%",
        marginLeft: 0
      }}>
      <Grid.Column floated='left'>
        <TreesContainer
          lat={this.state.lat}
          lon={this.state.lon}
          trees={this.state.trees}
          handleCardClick={this.handleCardClick}/>
      </Grid.Column>
      <Grid.Column floated='right'>
      <br/><br/><br/>
        <MapContainer
          lat={this.state.lat}
          lon={this.state.lon}
          markerLat={this.state.markerLat}
          markerLon={this.state.markerLon}
          trees={this.state.trees}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDhkn9ea3jg99u1BZqNrroIQ72C9c44HeM&v=3.exp&libraries=geometry,drawing,places`}
				  loadingElement={<div style={{ height: `100%` }} />}
				  containerElement={<div style={{ height: `100%`, width: `100%` }} />}
				  mapElement={<div style={{ height: `90%` }} />}/>
      </Grid.Column>

      </Grid>

    </div>
    )
  }
}

export default LocationContainer;
