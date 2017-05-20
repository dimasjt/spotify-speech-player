import React, { Component } from 'react';
import reactCSS from 'reactcss';

import AI from '../../lib/ai';

const styles = reactCSS({
  'default': {
    hide: {
      display: 'none',
    },
  },
});

export default class Speech extends Component {
  componentDidMount() {
    let props = this.props;
    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = 'id-ID';
    this.recognition.onresult = (event) => {
      let speechResult = event.results[0][0].transcript;
      let speechInput = this.refs.speech;

      speechInput.value = speechResult;
      AI(speechResult, props);
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();

    let value = this.refs.speech.value;
    AI(value, this.props);
  }
  speech = () => {
    this.recognition.start();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="speech" />
          <input type="submit" style={styles.hide} />
        </form>

        <a onClick={this.speech}>Speech</a>
      </div>
    );
  }
};
