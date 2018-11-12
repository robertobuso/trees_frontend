import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'

class TreesContainer extends Component {

  state = {
    trees: [],
    image_url: ''
  }
  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/nwxe-4ae8.json?$where=latitude >= 40.7340787 AND latitude < 40.7341787 AND longitude < -73.9970405 AND longitude > -73.9980405')
    .then(r => r.json())
    .then(r => this.setTrees(r))
  }

  setTrees = (trees) => {
    this.setState({
      trees: trees
    })
  }

  findImage = () => {
    fetch()
    .then(r => r.json())
    .then(r => this.setImage(r))
  }

    setImage = (image) => {
      this.setState({
        image_url: image.items[0].pagemap.cse_image[0]['src']
      })
    }

  render() {
    console.log(this.state.trees)
    return (
      <div>
      <Container text>
        <Header as='h2'> Trees! </Header>
          <p>
          We have {this.state.trees.length} trees!
          <br/><br/>
          The second tree's common name is {this.state.trees[1] ? this.state.trees[1]['spc_common'] : null}.
          <br/><br/>
          </p>
      </Container>
       <Image src={this.state.image_url} size='small' />
       </div>
    )
  }
}

export default TreesContainer;
