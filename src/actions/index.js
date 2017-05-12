exports.playTrack = (track) => {
  return {
    type: 'PLAY_TRACK',
    track,
  };
};
