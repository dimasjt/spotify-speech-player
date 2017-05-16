import { combineReducers } from 'redux';

import tracks from './tracks';
import playing from './playing';
import user from './user';

export default combineReducers({ tracks, playing, user });
