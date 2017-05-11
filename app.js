import Express from 'express';
import axios from 'axios';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import querystring from 'querystring';

import path from 'path';

import webpackConfig from './webpack.config.babel';
import Spotify from './src/lib/Spotify';

const app = Express();
const compiler = webpack(webpackConfig);
const port = 9000;
const stateKey = 'spotify_auth_state';

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
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  return axios.post(spotifyPath, querystring.stringify(data), {
    headers,
  });
}

const generateRandomString = (length) => {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  Express.static(__dirname + '/public', { maxAge: 31557600000  })
);

app.use(webpackDevMiddleware(compiler, {
  lazy: false,
  publicPath: '/public',
  stats: {
    colors: true,
  },
}));

app.get('/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const { data: { access_token, refresh_token } } = await getAuthToken(code);

    res.cookie('access_token', access_token);
    res.cookie('refresh_token', refresh_token);
    res.redirect(`/#${querystring.stringify({ success: 'success' })}`);
  } catch(e) {
    res.redirect(`/#${querystring.stringify({ error: 'cannot get auth token' })}`);
  }
});

app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  res.redirect(Spotify.authorize());
})

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      '==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port
    );
  }
});
