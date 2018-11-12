import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class Tree extends Component {

  render() {
    return(
      <Container textalign='center'>
        {this.props.tree.address}
      </Container>
    )
}

}

export default Tree;
