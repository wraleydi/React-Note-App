import React from 'react';

function ButtonDelete({ id, onDelete }) {
  return (
    <div className="button-delete">
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default ButtonDelete;
