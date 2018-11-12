import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
import Tree from './Tree'

class TreesContainer extends Component {

  state = {
    image_url: ''
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
          We have {this.props.trees.length} trees!
          <br/><br/>
          The second tree's common name is {this.props.trees[1] ? this.props.trees[1]['spc_common'] : null}.
          </p>
          The trees are in the following addresses:
          {this.props.trees.map(tree =>
            <Tree tree={tree} />
          )}

      </Container>
       <Image src={this.state.image_url} size='small' />
       </div>
    )
  }
}

export default TreesContainer;
