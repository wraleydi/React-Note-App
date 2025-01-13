import React from 'react';
import NoteItem from './noteItem';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          isArchive={note.archived}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
