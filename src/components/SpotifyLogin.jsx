import React, { Component } from 'react';

export default class SpotifyLogin extends Component {
  loginSpotify() {
    const scopes = ['user-read-private', 'user-read-email', 'user-read-recently-played', 'user-modify-playback-state', 'streaming'].join(' ');
    const redirectURI = 'http://localhost:9000';
    const clientID = '0856b68f7de34d5a8b885d6a3db52c5b';
    const authorizePath = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${encodeURIComponent(redirectURI)}&scope=${encodeURIComponent(scopes)}`

    window.location = authorizePath;
  }
  render() {
    return (
      <div>
        <a href='#' onClick={this.loginSpotify}>Login To Spotify</a>
      </div>
    )
  }
}
