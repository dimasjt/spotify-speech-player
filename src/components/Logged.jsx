import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Spotify from '../lib/Spotify';

import LogoutLink from './LogoutLink';
import Playing from './player/Playing';
import ListTracks from './player/ListTracks';

export default class Logged extends Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
    };
  }
  render() {
    return (
      <Panel>
        <Playing />
        <ListTracks />
        <LogoutLink />
      </Panel>
    );
  }
}
