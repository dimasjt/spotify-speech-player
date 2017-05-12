import React, { Component } from 'react';
import Cookie from 'js-cookie';
import reactCSS from 'reactcss';
import { Grid, Row, Col } from 'react-bootstrap';

import Unlogged from '../components/Unlogged';
import Logged from '../components/Logged';

const styles = reactCSS({
  'default': {
    wrapper: {
      margin: '0 auto',
      marginTop: '100px',
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
      return (
        <Col md={8} mdOffset={2}>
          <Logged {...this.props} />
        </Col>
      );
    } else {
      return (
        <Col md={6} mdOffset={3}>
          <Unlogged {...this.props} />
        </Col>
      );
    }
  }

  render() {
    return (
      <Grid style={styles.wrapper}>
        <Row>
          {this.renderContent()}
        </Row>
      </Grid>
    );
  };
};
