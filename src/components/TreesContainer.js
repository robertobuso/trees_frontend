import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
import Tree from './Tree'
import {findImage} from '../adapters/index.js'

class TreesContainer extends Component {

  state = {
    image_url: ''
  }

  componentDidMount() {
    findImage()
    .then(r => this.setImage(r), () => console.log('IMAGE: ', this.state.image_url))
  }

    setImage = (image) => {
      this.setState({
        image_url: image
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
      {this.state.image_url.query ?
       <Image src={this.state.image_url.query.pages['-1']['imageinfo'][0]['thumburl']} />
       : null}
       </div>
    )
  }
}

export default TreesContainer;
