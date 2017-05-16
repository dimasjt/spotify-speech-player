import regex from './regex';
import Spotify from './Spotify';

const AI = async (text, props) => {
  if (regex.playMusic.test(text)) {
    const trackName = text.replace(regex.playMusic, '').trim();

    if (trackName) {
      try {
        const { payload: tracks } = await props.searchTracks(trackName);

        if (tracks.length) {
          props.playTrack(tracks);
        }
      } catch (e) {
        console.error(e);
      }

    } else {
      try {
        props.playTrack();
      } catch (e) {
        console.error(e);
      }
    }
  } else if (regex.stopMusic.test(text)) {
    try {
      const result = await Spotify.pause();

      return { action: 'stopMusic', message: 'success' };
    } catch (e) {
      return { action: 'stopMusic', message: e };
    }
  } else if (regex.nextMusic.test(text)) {
    try {
      const result = await props.nextTrack();
    } catch (e) {
      console.error(e);
    }
  } else if (regex.prevMusic.test(text)) {
    try {
      const result = await props.prevTrack();
    } catch (e) {
      console.error(e);
    }
  } else {
    console.log('I dont know');
    return { action: 'unknown', message: 'Undefined command' };
  }
};

export default AI;
