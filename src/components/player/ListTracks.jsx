import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ListTracks extends Component {
  renderList() {
    const { playing } = this.props;

    return this.props.tracks.map((track) => {
      let activeClass = track.id == playing.id ? 'info' : '';

      return (
        <ListGroupItem key={track.id} bsStyle={activeClass}>
          {track.name}
        </ListGroupItem>
      );
    })
  }
  render() {
    return (
      <ListGroup>
        {this.renderList()}
      </ListGroup>
    );
  }
};
