import React from 'react';
import { render } from 'react-dom';
import queryString from 'query-string';

import Main from './layouts/Main';

const params = queryString.parse(window.location.search);

if (params.code) {
  window.localStorage.setItem('authCode', params.code);
  window.location = '/';
} else {
  render(
    <Main />,
    document.getElementById('root')
  );
}
