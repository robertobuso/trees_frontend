import React, { Component } from 'react';
import TreesContainer from './TreesContainer'
import {findTrees} from '../adapters/index.js'
import { Container, Header } from 'semantic-ui-react'

class LocationContainer extends Component {

  state = {
    lat: 0,
    lon: 0,
    trees: []
  }

  componentDidMount() {
    this.getLocation()
  }

 getLocation = () => {
   const geolocation = navigator.geolocation
      if (geolocation) {
        console.log('INSIDE GEOLOCATION')
         geolocation.getCurrentPosition((position) => this.showPosition(position))
      } else {
          alert("Geolocation is not supported by this browser.")
      }
  }

   showPosition = (position) => {
    console.log('INSIDE SHOWPOSITION')
      this.setState({  lat: position.coords.latitude, lon: position.coords.longitude
      }, () => {
        findTrees(this.state.lat, this.state.lon)
        .then(trees => this.setTrees(trees))
      })
  }

  setTrees = (trees) => {
    console.log('INSIDE setTREES')
    this.setState({
      trees: trees
    })
  }

  render() {
    console.log(this.state)
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
      <TreesContainer
        lat={this.state.lat}
        lon={this.state.lon}
        trees={this.state.trees}/>
         </div>
      
    )
  }
}



export default LocationContainer;
