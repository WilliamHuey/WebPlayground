import React, { Component } from 'react';

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
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.onSongSubmit}>
          <label htmlFor="song">What is your favorite song?</label>
          <input id="song" type="text" ref="song" placeholder="Enter your favorite song ..." />
          <input type="submit" value="Submit" />
        </form>

        {this.state.song ? <h2>{this.state.song}</h2> : '' }
      </div>
    )
  }
}
