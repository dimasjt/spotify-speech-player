import Express from 'express';
import axios from 'axios';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import path from 'path';

import webpackConfig from './webpack.config';

const app = Express();
const compiler = webpack(webpackConfig);
const port = 9000;

const client_id = '0856b68f7de34d5a8b885d6a3db52c5b';
const client_secret = '38312aa6c85a461393e25b2073d3a1b6';
const redirect_uri = 'http://localhost:9000/callback';
const authBasic = new Buffer(`${client_id}:${client_secret}`).toString('base64');

const getAuthToken = (code) => {
  let spotifyPath = 'https://accounts.spotify.com/api/token';
  let data = {
    code,
    redirect_uri,
    grant_type: 'authorization_code',
  };
  let headers = {
    'Authorization': `Basic ${authBasic}`,
    'Content-Type': 'application/json',
  };

  return axios({
    method: 'POST',
    url: spotifyPath,
    headers,
    data,
  });
}

app.use(
  Express.static(__dirname + '/public', { maxAge: 31557600000  })
);

app.use(webpackDevMiddleware(compiler, {
  lazy: true,
  publicPath: '/public',
  stats: {
    colors: true,
  },
}));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/callback', async (req, res) => {
  const { code } = req.query;
  const result = await getAuthToken();
  console.log(result);
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      '==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port
    );
  }
});
