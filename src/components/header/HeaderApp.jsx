import React from 'react';
import NoteTitleApp from './NoteTitleApp';
import NoteSearchApp from './NoteSearchApp';

function HeaderApp({ onSearch }) {
  return (
    <div className="note-app__header">
      <NoteTitleApp />
      <NoteSearchApp onSearch={onSearch} />
    </div>
  );
}

export default HeaderApp;
