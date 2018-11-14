import React, { Component } from 'react';
import { Image, Card, Icon } from 'semantic-ui-react'
import {findImage, findWikiPage} from '../adapters/index.js'

class Tree extends Component {

  state = {
    image_url: '',
    wiki_url: ''
  }

  componentDidMount() {
    findImage(this.props.tree.spc_common)
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
    findWikiPage(this.props.tree.spc_common)
    .then( r => this.setState({ wiki_url: r[3][0]}), () => console.log(this.state.wiki_url))
  }

  capitalize = (string) => {
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
         <Card.Header>
           <a href={this.state.wiki_url}  target='_blank'>
           {this.capitalize(this.props.tree.spc_common)}
           </a>
           </Card.Header>

         <Card.Meta>{this.capitalize(this.props.tree.spc_latin)}</Card.Meta>
         <Card.Description>
            <br/>
            Nearest Address
            <br/>
            {this.props.tree.address}
          </Card.Description>
       </Card.Content>
       <Card.Content extra>
           <Icon name='heart'
            color={this.props.tree.health === 'Poor' ? 'red' : 'green'}/>
           Tree Health: {this.props.tree.health}
         </Card.Content>
         </Card>
    )
  }
}

export default Tree;
