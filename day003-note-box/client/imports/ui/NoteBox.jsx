import React, { Component } from 'react';
import NoteForm from './NoteForm.jsx';

export default class NoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {notes: ["booyah"]};
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleAddNote(note) {
    let notes = this.state.notes.concat(note);
    if (note.length > 0) {
      this.setState({notes: notes});
    }
  }

  render() {
    return (
      <div className="notebox">
        <h1>NoteBox</h1>
        <NoteForm  notes={this.state.notes} handleAddNote={this.handleAddNote}></NoteForm>
      </div>
    )
  }
}
