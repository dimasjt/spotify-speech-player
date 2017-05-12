import React, { Component } from 'react';
import { Panel, Row, Grid, Col } from 'react-bootstrap';

import Spotify from '../lib/Spotify';

import LogoutLink from './LogoutLink';
import Playing from './player/Playing';
import ListTracks from './player/ListTracks';
import Speech from './player/Speech';

export default class Logged extends Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
    };
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <Panel>
              <Playing />
              <ListTracks />
              <LogoutLink />
            </Panel>
          </Col>
          <Col md={3}>
            <Speech />
          </Col>
        </Row>
      </Grid>
    );
  }
}
