import React, { Component } from 'react';
import { Container, Header, Grid, Card, Label } from 'semantic-ui-react'
import Tree from './Tree'

class TreesContainer extends Component {

  render() {
    return (
      <div>
      <Container text>
        <Header as='h2'> There are {this.props.trees.length} trees near your block! </Header>
      </Container>
      <br/><br/>

      <Grid columns={2} style={{overflow: 'auto', maxHeight: 550, padding: 10}} >
        <Grid.Column floated='right'>
        <Label as='a' color='red' ribbon='right' floating>
          Scroll Down
        </Label>
        <Card.Group>
        {this.props.trees.map(tree =>
            <Tree
              tree={tree}
              key={tree.tree_id}/>
        )}
        </Card.Group>
        </Grid.Column>
      </Grid>



       </div>
    )
  }
}

export default TreesContainer;
