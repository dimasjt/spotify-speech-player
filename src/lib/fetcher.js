const api = 'https://api.spotify.com/v1/';

const fetcher = (path, method) => {
  const authCode = window.localStorage.getItem('authCode');

  const headers = {
    'Authorization': `Bearer ${authCode}`,
  };

  const opts = {
    headers,
    method,
  };

  fetch(`${api}${path}`, opts);
};

exports.get = (path) => {
  fetcher(path, 'GET');
};

exports.post = (path) => {
  fetcher(path, 'POST');
};

exports.put = (path) => {
  fetcher(path, 'PUT');
};
