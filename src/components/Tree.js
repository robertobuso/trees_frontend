import React, { Component } from 'react';
import { Image, Card, Icon } from 'semantic-ui-react'
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
        <Card>
          {this.state.image_url ?
           <Image src={this.state.image_url} />
           : null}
           <Card.Content>
     <Card.Header>{this.props.tree.spc_common}</Card.Header>
     <Card.Meta>{this.props.tree.spc_latin}</Card.Meta>
     <Card.Description>{this.props.tree.address}</Card.Description>
   </Card.Content>
   <Card.Content extra>
     <a>
       <Icon name='heart' />
       Tree Health: {this.props.tree.health}
     </a>
     </Card.Content>
        </Card>
    )
  }
}

export default Tree;
