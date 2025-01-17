import React from 'react';
import NoteList from './notes/NoteList';
import HeaderApp from './header/HeaderApp';
import { getInitialData } from '../utils';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({ notes })
  }

  render() {
    return (
      <div>
    <HeaderApp />
    <div className="note-app__body">
      <h2>Your Notes</h2>
      <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
    </div>
  </div>
    );
  }
}

export default NoteApp;
