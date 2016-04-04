import React, { Component } from 'react';

import Song from './Song.jsx';

export default class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.onSongSubmit = this.onSongSubmit.bind(this);

    this.state = {
      song: null
    };
  }

  onSongSubmit(event) {
    event.preventDefault();
    this.setState({ song: this.refs.song.value });
    Songs.insert({
      name: this.refs.song.value,
      createdAt: new Date()
    });
  }

  renderSongs() {
    return Songs.find({}).fetch().map((song) => (
      <Song key={song._id} song={song} />
    ))
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.onSongSubmit}>
          <label htmlFor="song">What are your favorite songs?</label>
          <input id="song" type="text" ref="song" placeholder="Enter a song name ..." />
          <input type="submit" value="Submit" />
        </form>

        <ul>
          {this.renderSongs()}
        </ul>
      </div>
    )
  }
}
