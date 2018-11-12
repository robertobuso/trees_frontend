import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'

class Tree extends Component {

  render() {
    return(
      <Container text>
        {this.props.tree.address ?
          this.props.tree.address : null}
      </Container>
    )
}

}

export default Tree;
