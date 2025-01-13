import React from 'react';
import NoteList from './notes/noteList';
import { getInitialData } from '../utils';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <div className="note-app">
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default NoteApp;
