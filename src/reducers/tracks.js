function tracks(state = [], action) {
  switch (action.type) {
    case 'SEARCH_TRACKS_SUCCESS':
      // replace current tracks to new tracks
      return action.payload;
      // return [
      //   ...state,
      //   ...action.payload,
      // ];
    default:
      return state;
  }
}

export default tracks;
