import React, { Component } from 'react';
import { Image, Card, Icon } from 'semantic-ui-react'
import {findImage} from '../adapters/index.js'

class Tree extends Component {

  state = {
    image_url: ''
  }

  componentDidMount() {
    findImage(this.props.tree.spc_common)
    .then(image => this.setImage(image))
  }

  setImage = (image) => {
    if (image.query.pages[0]['thumbnail']) {
    this.setState({
      image_url: image.query.pages[0]['thumbnail']['source']
    })
    }
  }

  capitalize(string) {
    try {
      if (string.indexOf(' ') !== -1) {
        const stringArr = string.split(' ')
        return stringArr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      } else {
          return string.charAt(0).toUpperCase() + string.slice(1)
      }
    }
    catch(error) {
      console.error('Error', error);
    }
  }

  render() {
  
    return(
      <Card centered
        key={this.props.tree.tree_id}
        onClick={() => this.props.handleCardClick(this.props.tree.latitude, this.props.tree.longitude)}>
        {this.state.image_url ?
         <Image src={this.state.image_url} size='medium' />
         : null}
        <Card.Content>
         <Card.Header>{this.capitalize(this.props.tree.spc_common)}</Card.Header>
         <Card.Meta>{this.capitalize(this.props.tree.spc_latin)}</Card.Meta>
         <Card.Description>
            <br/>
            Nearest Address
            <br/>
            {this.props.tree.address}
          </Card.Description>
       </Card.Content>
       <Card.Content extra>
          <a>
           <Icon name='heart'
            color={this.props.tree.health === 'Poor' ? 'red' : 'green'}/>
           Tree Health: {this.props.tree.health}
           </a>
         </Card.Content>
         </Card>
    )
  }
}

export default Tree;
