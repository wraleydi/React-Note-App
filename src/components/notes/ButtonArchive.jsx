import React from 'react';

function ButtonArchive({ id, onArchive, isArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {isArchive ? 'Unarchived' : 'Archived'}
    </button>
  );
}

export default ButtonArchive;
