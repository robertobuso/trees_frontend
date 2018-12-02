import React, { Component } from 'react';
import { Header, Card, Label, Grid } from 'semantic-ui-react'
import Tree from './Tree'

class TreesContainer extends Component {
  render() {
    return (
      <>
        <Grid style={{overflow: 'auto', maxHeight:700, width: `100%`, padding: 10}}>
          <Label as='a' color='red' ribbon='center'>
            Scroll Down
          </Label>
          <Card.Group>
            {this.props.trees.map(tree =>
              <Tree
                tree={tree}
                key={tree.tree_id}
                />
            )}
          </Card.Group>
        </Grid>
      </>
    )
  }
}

export default TreesContainer;
