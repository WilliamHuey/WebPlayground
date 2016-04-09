import React, { Component } from 'react';

export default class NoteList extends Component {
  constructor(props) {
    super();
  }

  render() {
    let htmlNotes = this.props.notes.map((note) => {
      return (
        <li>{note}</li>
      );
    });
    return (
      <ul>
        {htmlNotes}
      </ul>
    );
  }
}