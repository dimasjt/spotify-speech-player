import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    buttonMargin: {
      marginTop: 40,
    },
  },
});

export default class Unlogged extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Spotify Speech Control</h1>
        <Button
          block
          bsStyle="success"
          bsSize="large"
          style={styles.buttonMargin}
          href="/login"
        >
          Login with Spotify
        </Button>
      </div>
    )
  }
}
