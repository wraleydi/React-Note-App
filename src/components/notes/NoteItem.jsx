import React from 'react';
import NoteItemBody from './NoteItemBody';
import { showFormattedDate } from '../../utils/index.js';
import ButtonDelete from './ButtonDelete';
import ButtonArchive from './ButtonArchive';

function NoteItem({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  isArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemBody
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
      />
      <div className="note-item__action">
        <ButtonDelete id={id} onDelete={onDelete} />
        <ButtonArchive id={id} onArchive={onArchive} isArchive={isArchive} />
      </div>
    </div>
  );
}

export default NoteItem;
