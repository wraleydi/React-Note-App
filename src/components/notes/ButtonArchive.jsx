import React from 'react';

function ButtonArchive({ id, onArchive, isArchive }) {
  return (
    <div>
      <button className='note-item__delete-button' onClick={() => onArchive(id)}>
        {isArchive ? 'Unarchived' : 'Archived'}
      </button>
    </div>
  );
}

export default ButtonArchive;
