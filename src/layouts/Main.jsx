import React, { Component } from 'react';
import Cookie from 'js-cookie';

import Speech from '../components/Speech';
import SpotifyLogin from '../components/SpotifyLogin';
import LogoutLink from '../components/LogoutLink';

export default class Main extends Component {
  constructor() {
    super();

    const access_token = Cookie.get('access_token');

    this.state = {
      isLogin: (access_token != null),
      accessToken: access_token,
    };
  }

  renderLogin() {
    return (this.state.isLogin ? <LogoutLink /> : <SpotifyLogin />);
  }

  render() {
    return (
      <div>
        <Speech />

        {this.renderLogin()}
      </div>
    );
  };
};
