import React, { Component  } from 'react';
import Cookie from 'js-cookie';

export default class LogoutLink extends Component {
  logoutHandler = () => {
    Cookie.remove('access_token');
    Cookie.remove('refresh_token');

    window.location = '/';
  }

  render() {
    return (
      <a href="#" onClick={this.logoutHandler}>Logout</a>
    );
  }
};
