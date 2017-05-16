import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Main from './Main';

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    playing: state.playing,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
