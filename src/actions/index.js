import Spotify from '../lib/Spotify';

exports.playTrack = (track) => {
  return {
    type: 'PLAY_TRACK',
    track,
  };
};

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
