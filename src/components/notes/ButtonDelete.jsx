import React from 'react';

function ButtonDelete({ id, onDelete }) {
  return (
    <div>
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default ButtonDelete;
