import React, { Component } from 'react';
import TreesContainer from './TreesContainer'
import MapContainer from './MapContainer'
import {findTrees, findImage, findWikiPage} from '../adapters/index.js'
import { Header, Grid } from 'semantic-ui-react'
require('dotenv').config()


class LocationContainer extends Component {

  state = {
    lat: 0,
    lon: 0,
    trees: [],
    clickedTree: {},
    image_url: '',
    wiki_url: '',
    paragraph: ''
  }

  componentDidMount() {
    this.getLocation()
    findImage()
  }

 getLocation = () => {
   const geolocation = navigator.geolocation
      if (geolocation) {
         geolocation.getCurrentPosition((position) => this.showPosition(position), this.errorFunction)
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

    errorFunction = () => {
      console.log("Geolocation error caught.")
      alert("Unable to retrieve your location.")
    }

  setTrees = (trees) => {
    this.setState({
      trees: trees
    })
  }

  handleClick = (tree) => {
    this.setState({
      clickedTree: tree,
      lat: Number(tree.latitude),
      lon: Number(tree.longitude)
    }, () => this.getImage(this.state.clickedTree.spc_common))

  }

  getImage = (species) => {
    console.log(species)
     findImage(species)
    .then(image => this.setImage(image))
  }

  setImage = (image) => {
    if (image.query.pages[0]['thumbnail']) {
    this.setState({
      image_url: image.query.pages[0]['thumbnail']['source']
    }, () => this.setWikiPage())
    }
  }

  setWikiPage = () => {
    findWikiPage(this.state.clickedTree.spc_common)
    .then( r => this.setState({ wiki_url: r[3][0]})
  )
  }

  render() {
    return (
      <>
        <Header as='h2' textAlign='center'>
          A Tree Grows in... {this.state.trees[1] ?
          this.state.trees[1].nta_name.includes ('Village') ? ' the ' + this.state.trees[1].nta_name
          :
          this.state.trees[1].nta_name : null}
        <Header.Subheader as='h3'>
          There are {this.state.trees.length} trees near your block!
          </Header.Subheader>
        </Header>
        <br/>
        <Grid stackable columns={2} style={ {margin: 1}}>
        <Grid.Column>
          <MapContainer
            trees={this.state.trees}
            lat={this.state.lat}
            lon={this.state.lon}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDhkn9ea3jg99u1BZqNrroIQ72C9c44HeM&v=3.exp&libraries=geometry,drawing,places`}
  				  loadingElement={<div style={{ height: `100%` }} />}
  				  containerElement={<div style={{ height: `100%`, width: `100%` }} />}
  				  mapElement={<div style={{ height: `90%` }} />}
            handleClick={this.handleClick}
          />
        </Grid.Column>

        <Grid.Column>
          <TreesContainer
            tree={this.state.clickedTree}
            image_url={this.state.image_url}
            wiki_url={this.state.wiki_url}
          />
        </Grid.Column>
      </Grid>
    </>
    )
  }
}

export default LocationContainer;
