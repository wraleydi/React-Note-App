import React from 'react';
import NoteItem from './NoteItem';
import MessageNote from './MessageNotes';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {
      notes.length > 0 ? (
      notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          isArchive={note.archived}
          {...note}
        />
      ))
      ) : (
        <MessageNote />
      )
    }
    </div>
  );
}

export default NoteList;
