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
  constructor(props) {
    super(props);

    this.state = {
      onRecognition: false
    }
  }
  componentDidMount() {
    let that = this
    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = 'id-ID';
    this.recognition.onresult = (event) => {
      let speechResult = event.results[0][0].transcript;
      let speechInput = this.refs.speech;

      speechInput.value = speechResult;
      this.setState({ onRecognition: false });
      AI(speechResult, that.props);
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();

    let value = this.refs.speech.value;
    AI(value, this.props);
  }
  speech = () => {
    // handle double start recognition
    if (!this.state.onRecognition) {
      this.recognition.start();
      this.setState({ onRecognition: true });
    }
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
