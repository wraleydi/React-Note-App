import React from 'react';
import NoteList from './notes/NoteList';
import HeaderApp from './header/HeaderApp';
import { getInitialData } from '../utils';
import MessageNote from './notes/MessageNotes';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchHandler(title) {
    this.setState(() => {
      return {
        search: title,
      };
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  render() {
    const searchNote = this.state.notes.filter((notes) =>
      notes.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    const archivedNote = searchNote.filter((notes) => {
      return notes.archived === true;
    });

    const activeNote = searchNote.filter((notes) => {
      return notes.archived === false;
    });

    return (
      <div>
        <HeaderApp onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <h2>Your Notes</h2>
          {activeNote.length > 0 ? (
            <NoteList
              notes={activeNote}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <MessageNote />
          )}
          <h2>Your Archive Notes</h2>
          {archivedNote.length > 0 ? (
            <NoteList
              notes={archivedNote}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <MessageNote />
          )}
        </div>
      </div>
    );
  }
}

export default NoteApp;
