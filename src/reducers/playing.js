function playing(state = {}, action) {
  switch (action.type) {
    case 'PLAY_TRACK_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default playing;
