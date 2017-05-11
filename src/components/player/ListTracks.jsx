import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ListTracks extends Component {
  renderList() {
    return <ListGroupItem>Track name</ListGroupItem>
  }
  render() {
    return (
      <ListGroup>
        {this.renderList()}
      </ListGroup>
    );
  }
};
