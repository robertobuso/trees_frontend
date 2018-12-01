import React, { Component } from 'react';
import { Image, Card, Icon, Modal, Header, Button } from 'semantic-ui-react'
import {findImage, findWikiPage} from '../adapters/index.js'

class Tree extends Component {

  state = {
    image_url: '',
    wiki_url: '',
    paragraph: ''
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
    .then( r => this.setState({ wiki_url: r[3][0]})
  )
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
      >
        {this.state.image_url ?
         <Image src={this.state.image_url} size='medium' />
         : null}
        <Card.Content>
         <Card.Header>
           <a href={this.state.wiki_url}  target='_blank' rel="noopener noreferrer">
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
    <Modal trigger={<Button>Details</Button>}>
       <Modal.Header>{this.capitalize(this.props.tree.spc_common)}</Modal.Header>
       <Modal.Content image>
         <Image wrapped size='medium' src={this.state.image_url} />
         <Modal.Description>
           <Header color='green'>
           {this.capitalize(this.props.tree.spc_latin)}
           </Header>
           <p>Health: {this.props.tree.health}</p>
           <p>Status: {this.props.tree.status}</p>
           <p>Diameter: {this.props.tree.tree_dbh} cm.</p>
           <p>Neighborhood: {this.props.tree.nta_name}</p>
           <p>Problems: {this.props.tree.problems}</p>
         </Modal.Description>
      </Modal.Content>
    </Modal>
  </Card>
    )
  }
}

export default Tree;
