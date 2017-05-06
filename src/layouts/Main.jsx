import React, { Component } from 'react';

import Speech from '../components/Speech';
import SpotifyLogin from '../components/SpotifyLogin';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Speech />

        <SpotifyLogin />
      </div>
    );
  };
};
