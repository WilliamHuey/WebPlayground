import React, { Component } from 'react';
import NoteList from './NoteList.jsx';

export default class NoteForm extends Component {
  constructor(props) {
    super();
    this.onNoteSubmit = this.onNoteSubmit.bind(this);
  }

  onNoteSubmit(e) {
    e.preventDefault();
    let noteValue = this.refs.note.value;

    this.props.handleAddNote(noteValue);
  }

  render() {
    return (
      <div className="note-form">
        <form onSubmit={this.onNoteSubmit}>

          <label htmlFor="note">Note</label>
          <textarea id="note" type="text" ref="note" placeholder="Enter your notes"></textarea>
          <input type="submit" value="Submit" />
        </form>

        <NoteList notes={this.props.notes} />
      </div>
    );
  }
}