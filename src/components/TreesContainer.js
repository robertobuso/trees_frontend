import React, { Component } from 'react';
import { Container, Header, Card } from 'semantic-ui-react'
import Tree from './Tree'

class TreesContainer extends Component {



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
              <Tree
                tree={tree}
                key={tree.tree_id}/>
          )}

      </Container>

       </div>
    )
  }
}

export default TreesContainer;
