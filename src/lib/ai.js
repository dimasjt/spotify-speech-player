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

      // const { data } = await Spotify.search(trackName);

      // if (data.tracks.items.length) {
      //   const firstTrack = data.tracks.items[0];
      //   const trackUri = firstTrack.uri;
      //   const player = await Spotify.play(trackUri);

      //   return { action: 'playMusic', message: 'Playing', payload: firstTrack };
      // } else {
      //   return { action: 'playMusic', message: 'Track not found' };
      // }
    } else {
      const payload = {
        message: 'Playing',
      };
      const player = await Spotify.play();

      return { action: 'playMusic', payload: payload };
    }
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
