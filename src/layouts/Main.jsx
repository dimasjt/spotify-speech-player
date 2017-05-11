import React, { Component } from 'react';
import Cookie from 'js-cookie';
import reactCSS from 'reactcss';

import Unlogged from '../components/Unlogged';
import Logged from '../components/Logged';

const styles = reactCSS({
  'default': {
    wrapper: {
      margin: '0 auto',
      marginTop: '100px',
      width: '30%',
    },
  },
});

export default class Main extends Component {
  constructor() {
    super();

    const access_token = Cookie.get('access_token');

    this.state = {
      isLogin: (access_token != null),
      accessToken: access_token,
    };
  }

  renderContent() {
    if (this.state.isLogin) {
      return <Logged />;
    } else {
      return <Unlogged />;
    }
  }

  render() {
    return (
      <div style={styles.wrapper}>
        {this.renderContent()}
      </div>
    );
  };
};
