import React, { Component } from 'react';
import { Container, Header, Card, Label, Grid } from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars';
import Tree from './Tree'

class TreesContainer extends Component {


  render() {
    return (
      <>
        <Header as='h3'> There are {this.props.trees.length} trees near your block! </Header>

      <Grid style={{overflow: 'auto', maxHeight:300, maxWidth: `100%`, padding: 10}}>
      <Label as='a' color='red' ribbon='right' floating>
        Scroll Down
      </Label>
        <Card.Group>
        {this.props.trees.map(tree =>
            <Tree
              tree={tree}
              key={tree.tree_id}
              handleCardClick={this.props.handleCardClick}/>
        )}
        </Card.Group>
        </Grid>
        </>
      )
  }
}

export default TreesContainer;
