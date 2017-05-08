import fetcher from './fetcher';

exports.play = (trackName) => {

};

exports.search = (query) => {
  return fetcher.get(`search?type=track&q=${query}`);
};

exports.token = (token) => {
  const authorizationCode = 'MDg1NmI2OGY3ZGUzNGQ1YThiODg1ZDZhM2RiNTJjNWI6MzgzMTJhYTZjODVhNDYxMzkzZTI1YjIwNzNkM2ExYjY=';
  const headers = new Headers({
    'Authorization': `Basic ${authorizationCode}`,
  });

  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers,
  });
}
