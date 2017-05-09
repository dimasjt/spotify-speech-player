import Cookie from 'js-cookie';
import axios from 'axios';

const api = 'https://api.spotify.com/v1';

const fetcher = (path, method, data = null) => {
  const authCode = Cookie.get('access_token');

  const headers = {
    'Authorization': `Bearer ${authCode}`,
  };

  return axios({
    method,
    headers,
    url: `${api}/${path}`,
    data,
  });
};

exports.get = (path) => {
  return fetcher(path, 'GET');
};

exports.post = (path) => {
  return fetcher(path, 'POST');
};

exports.put = (path, data = null) => {
  return fetcher(path, 'PUT', data);
};
