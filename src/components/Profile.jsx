import React, { Component } from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

import LogoutLink from './LogoutLink';

export default class Profile extends Component {
  componentWillMount() {
    this.props.getUser();
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <Thumbnail src={user.image} alt="profile">
          <h3>{user.display_name}</h3>
          <LogoutLink />
        </Thumbnail>
      </div>
    );
  }
};
