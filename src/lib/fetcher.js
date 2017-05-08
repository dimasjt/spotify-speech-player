import Cookie from 'js-cookie';
import axios from 'axios';

const api = 'https://api.spotify.com/v1';

const fetcher = (path, method) => {
  const authCode = Cookie.get('access_token');

  const headers = {
    'Authorization': `Bearer ${authCode}`,
  };

  return axios({
    method,
    headers,
    url: `${api}/${path}`,
  });
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
