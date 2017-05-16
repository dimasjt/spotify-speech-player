exports.playing = (state = {}, action) => {
  switch (action.type) {
    case 'PLAY_TRACK_SUCCESS':
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
}
