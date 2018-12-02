import React, { Component } from 'react';
import { Grid, Item, Icon, Header, Image } from 'semantic-ui-react'


class TreesContainer extends Component {

  capitalize = (string) => {
    if (string) {
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
  }

  render() {
    return(
      <Grid columns={2}>
      <Grid.Column>
      <Image size='medium' src={this.props.image_url} />
      </Grid.Column>
      <Grid.Column>
      <Item>
      <Header> <a href={this.props.wiki_url}  target='_blank' rel="noopener noreferrer">
       {this.capitalize(this.props.tree.spc_common)}
       </a>
       </Header>
       <Item.Content verticalAlign='middle'>


            <Item.Description>
             <Item.Header color='red'>

             </Item.Header>
             <p>Latin Species Name: {this.capitalize(this.props.tree.spc_latin)}</p>
             <p>Nearest Address: {this.props.tree.address}</p>
             <p>Status: {this.props.tree.status}</p>
             <p>Diameter: {this.props.tree.tree_dbh} cm.</p>
             <p>Neighborhood: {this.props.tree.nta_name}</p>
             <p>Problems: {this.props.tree.problems}</p>
             <Icon name='heart'
              color={this.props.tree.health === 'Poor' ? 'red' : 'green'}/>
             Tree Health: {this.props.tree.health}
           </Item.Description>
             </Item.Content>
  </Item>
  </Grid.Column>
  </Grid>
    )
  }
}


export default TreesContainer;
