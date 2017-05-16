function tracks(state = [], action) {
  switch (action.type) {
    case 'SEARCH_TRACKS_SUCCESS':
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
}

export default tracks;
