// @flow
import * as React from 'react';
import type {Note} from "./NoteDB";
import NoteListItem from './NoteListItem';

type NoteListProps = {
    noteList: Array<Note>,
};

const NoteList = ({noteList}: NoteListProps) => (
    <div>
        { noteList.map(note => <NoteListItem key={`note-${note.id}`} note={note}/>)}
    </div>
);

export default NoteList;