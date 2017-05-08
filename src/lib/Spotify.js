import fetcher from './fetcher';
import querystring from 'querystring';

exports.play = (trackName) => {
  return fetcher.put(`me/player/play`)
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

exports.authorize = () => {
  const scopes = ['user-read-private', 'user-read-email', 'user-read-birthdate', 'user-read-recently-played', 'user-modify-playback-state', 'streaming'].join(' ');
  const redirect_uri = 'http://localhost:9000/callback';
  const client_id = '0856b68f7de34d5a8b885d6a3db52c5b';
  const spotifyPath = 'https://accounts.spotify.com/authorize?';

  const authorizePath = spotifyPath + querystring.stringify({
    scope: scopes,
    redirect_uri,
    client_id,
    response_type: 'code',
  });

  return authorizePath;
}
