import Spotify from '../lib/Spotify';

exports.playTrack = async (tracks) => {
  try {
    const result = await Spotify.play(tracks);

    if (tracks.length) {
      const track = tracks[0];

      return {
        type: 'PLAY_TRACK_SUCCESS',
        payload: track,
      };
    } else {
      return {
        type: 'PLAY_CURRENT_SUCCESS',
      };
    }
  } catch (e) {
    return {
      type: 'PLAY_TRACK_ERROR',
      payload: e,
    };
  }
};

exports.prevTrack = async () => {
  try {
    const result = await Spotify.previous();

    return {
      type: 'PREV_TRACK_SUCCESS',
      payload: null,
    };
  } catch (e) {
    return {
      type: 'PREV_TRACK_ERROR',
      payload: e,
    };
  }
}

exports.nextTrack = async () => {
  try {
    const result = await Spotify.next();

    return {
      type: 'NEXT_TRACK_SUCCESS',
      payload: null,
    };
  } catch (e) {
    return {
      type: 'NEXT_TRACK_ERROR',
      payload: e,
    };
  }
}

exports.searchTracks = async (query) => {
  try {
    const { data: { tracks: { items } } } = await Spotify.search(query)

    return {
      type: 'SEARCH_TRACKS_SUCCESS',
      payload: items,
    };
  } catch (e) {
    return {
      type: 'SEARCH_TRACKS_ERROR',
      payload: e,
    }
  }
}

exports.getUser = async () => {
  try {
    const { data } = await Spotify.user();

    return {
      type: 'GET_USER_SUCCESS',
      payload: data,
    };
  } catch (e) {
    return {
      type: 'GET_USER_ERROR',
      payload: e,
    };
  }
};
