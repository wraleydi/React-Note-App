import React from 'react';

function NoteSearchApp({ onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="cari catatan..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default NoteSearchApp;
