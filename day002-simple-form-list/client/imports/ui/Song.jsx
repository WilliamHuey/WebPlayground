import React, { Component } from 'react';

export default class Song extends Component {
  render() {
    return (
      <li>
        <span>
          <span className="song-name">
            {this.props.song.name}
          </span>
          <span className="date">
            {this.props.song.createdAt.toString()}
          </span>
        </span>
      </li>
    );
  }
}