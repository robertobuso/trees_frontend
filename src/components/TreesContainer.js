import React, { Component } from 'react';
import { Image, Card, Icon, Header } from 'semantic-ui-react'


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
      <Card centered
        key={this.props.tree.tree_id}
      >
         <Header> <a href={this.props.wiki_url}  target='_blank' rel="noopener noreferrer">
          {this.capitalize(this.props.tree.spc_common)}
          </a>
          </Header>
           <Image wrapped size='medium' src={this.props.image_url} />
           <Card.Content>
            <Card.Description>
             <Header color='red'>
             {this.capitalize(this.props.tree.spc_latin)}
             </Header>
             <p>Nearest Address: {this.props.tree.address}</p>
             <p>Status: {this.props.tree.status}</p>
             <p>Diameter: {this.props.tree.tree_dbh} cm.</p>
             <p>Neighborhood: {this.props.tree.nta_name}</p>
             <p>Problems: {this.props.tree.problems}</p>
           </Card.Description>
          </Card.Content>
       <Card.Content extra>
           <Icon name='heart'
            color={this.props.tree.health === 'Poor' ? 'red' : 'green'}/>
           Tree Health: {this.props.tree.health}
         </Card.Content>
  </Card>
    )
  }
}


export default TreesContainer;
