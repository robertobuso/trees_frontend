import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'

class TreesContainer extends Component {

  state = {
    trees: [],
    image_url: ''
  }
  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/nwxe-4ae8.json')
    .then(r => r.json())
    .then(r => this.setTrees(r))
  }

  setTrees = (trees) => {
    console.log("TREES", trees)
    this.setState({
      trees: trees
    })
  }

  findImage = () => {
    fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyAAHq2KOz6_q4Ol-A2hfF88oLMqnf7DRXY&cx=008113235877743409861:zua0x3ncdjw&q=red+maple')
    .then(r => r.json())
    .then(r => this.setImage(r))
  }

    setImage = (image) => {
      this.setState({
        image_url: image.items[0].pagemap.cse_image[0]['src']
      })
    }

  render() {
    return (
      <div>
      <Container text>
        <Header as='h2'> Trees! </Header>
          <p>
          We have {this.state.trees.length} trees!
          <br/><br/>
          The first tree's common name is {this.state.trees[0] ? this.state.trees[0]['spc_common'] : null}.
          <br/><br/>
          </p>
      </Container>
       <Image src={this.state.image_url} size='small' />
       </div>
    )
  }
}

export default TreesContainer;
