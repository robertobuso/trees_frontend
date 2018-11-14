import React, { Component } from 'react';
import { Container, Header, Grid, Card, Label } from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars';
import Tree from './Tree'

class TreesContainer extends Component {


  render() {
    return (
      <div>
      <Container text>
        <Header as='h3'> There are {this.props.trees.length} trees near your block! </Header>
      </Container>
      <br/><br/>

      <Grid columns={2} style={{overflow: 'auto', maxHeight: 550, padding: 10}} >
        <Grid.Column floated='left'>
        <Label as='a' color='red' ribbon='right' floating>
          Scroll Down
        </Label>
        <Scrollbars style={{ height: 550 }}>
        <Card.Group>
        {this.props.trees.map(tree =>
            <Tree
              tree={tree}
              key={tree.tree_id}
              handleCardClick={this.props.handleCardClick}/>
        )}
        </Card.Group>
        </Scrollbars>
        </Grid.Column>
      </Grid>
       </div>
    )
  }
}

export default TreesContainer;
