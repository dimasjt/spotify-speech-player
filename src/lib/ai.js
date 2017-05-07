import regex from './regex';
import Spotify from './Spotify';

const AI = async (text) => {
  if (regex.playMusic.test(text)) {
    const trackName = text.replace(regex.playMusic, '').trim();

    const payload = {
      track: trackName,
    };

    const result = await Spotify.search(trackName);
    console.log('result', result)
    return { action: 'playMusic', payload: payload };
  } else if (regex.stopMusic.test(text)) {
    return { action: 'stopMusic'  };
  } else {
    console.log('I dont know');
    return { action: 'unknown', message: 'Undefined command' };
  }
};

export default AI;
