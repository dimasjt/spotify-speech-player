import React from 'react';
import { render } from 'react-dom';
import queryString from 'query-string';

import Main from './layouts/Main';
import Spotify from './lib/Spotify';

const params = queryString.parse(window.location.search);

const getAuthToken = async (code) => {
  try {
    const result = await Spotify.token(params.code);
    return result;
  } catch (e) {
    console.log(e);
    return 'error';
  }
}

if (params.code) {
  getAuthToken();
  // window.location = '/';
} else {
  render(
    <Main />,
    document.getElementById('root')
  );
}
