import React, { Component } from 'react';

import AI from '../../lib/ai';

export default class Speech extends Component {
  handleChange (event) {
    if (event.keyCode === 13) {
      const value = event.target.value;

      AI(value);
    }
  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleChange} />

        <a>Speech</a>
      </div>
    );
  }
};
