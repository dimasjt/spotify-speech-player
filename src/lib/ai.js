import regex from './regex';
import Spotify from './Spotify';

const AI = async (text) => {
  if (regex.playMusic.test(text)) {
    const trackName = text.replace(regex.playMusic, '').trim();

    const payload = {
      track: trackName,
    };

    if (trackName) {
      const result = await Spotify.search(trackName);
    } else {
      const player = await Spotify.play();
    }

    return { action: 'playMusic', payload: payload };
  } else if (regex.stopMusic.test(text)) {
    try {
      const result = await Spotify.pause();

      return { action: 'stopMusic', message: 'success' };
    } catch (e) {
      return { action: 'stopMusic', message: e };
    }
  } else {
    console.log('I dont know');
    return { action: 'unknown', message: 'Undefined command' };
  }
};

export default AI;
