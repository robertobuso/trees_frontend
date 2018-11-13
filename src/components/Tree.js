import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react'
import {findImage} from '../adapters/index.js'

class Tree extends Component {

  state = {
    image_url: ''
  }

  componentDidMount() {
    // console.log('TREE', this.props.tree.spc_common)
    findImage(this.props.tree.spc_common)
    .then(image => this.setImage(image))
  }

  setImage = (image) => {
    if (image.query.pages[0]['thumbnail']) {
    this.setState({
      image_url: image.query.pages[0]['thumbnail']['source']
    }, () => console.log('Query in state is: ', this.state.image_url))
    }
  }

  render() {

    return(
      <Container textalign='center'>
        {this.props.tree.address}
        {this.state.image_url ?
         <Image src={this.state.image_url} />
         : null}
      </Container>
    )
  }
}

export default Tree;
