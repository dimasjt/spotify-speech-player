import React, { Component  } from 'react';
import { Button } from 'react-bootstrap';
import Cookie from 'js-cookie';

export default class LogoutLink extends Component {
  logoutHandler = () => {
    Cookie.remove('access_token');
    Cookie.remove('refresh_token');

    window.location = '/';
  }

  render() {
    return (
      <Button block bsStyle="danger" onClick={this.logoutHandler}>Logout</Button>
    );
  }
};
