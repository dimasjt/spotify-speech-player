import Spotify from '../lib/Spotify';

exports.playTrack = async (tracks) => {
  try {
    const result = await Spotify.play(tracks);
    const track = tracks[0];

    return {
      type: 'PLAY_TRACK_SUCCESS',
      payload: track,
    }
  } catch (e) {
    return {
      type: 'PLAY_TRACK_ERROR',
      payload: e,
    }
  }
};

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
