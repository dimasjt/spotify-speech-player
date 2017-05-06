import regex from './regex';

export default function (text) {
  if (regex.playMusic.test(text)) {
    const trackName = text.replace(regex.playMusic, '').trim();

    const payload = {
      track: trackName,
    };

    return { action: 'playMusic', payload: payload };
  } else if (regex.stopMusic.test(text)) {
    return { action: 'stopMusic'  };
  } else {
    console.log('I dont know');
    return { action: 'unknown', message: 'Undefined command' };
  }
};

