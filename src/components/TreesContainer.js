import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'

class TreesContainer extends Component {

  state = {
    trees: [],
    image_url: ''
  }
  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/nwxe-4ae8.json?$where=latitude >= 40.72309177 AND latitude < 40.7231 AND longitude > -73.9970284 AND longitude < -73.99')
    .then(r => r.json())
    .then(r => console.log(r))
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
    return (
      <div>
      <Container text>
        <Header as='h2'> Trees! </Header>
          <p>
          We have {this.state.trees.length} trees!
          <br/><br/>
          The third tree's common name is {this.state.trees[2] ? this.state.trees[2]['spc_common'] : null}.
          <br/><br/>
          </p>
      </Container>
       <Image src={this.state.image_url} size='small' />
       </div>
    )
  }
}

export default TreesContainer;
