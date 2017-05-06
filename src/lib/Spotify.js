const api = 'https://api.spotify.com/v1/';

const fetcher = (path) => {
  const authCode = window.localStorage.getItem('authCode');

  const headers = {
    'Authorization': `Bearer ${authCode}`,
  };

  const opts = {
    headers,
  };

  fetch(`${api}${path}`, opts);
};

exports.play = (trackName) => {

};

exports.search = async (query) => {
  const result = await fetcher('search');
  console.log(result);
};
