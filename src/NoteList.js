// @flow
import * as React from 'react';
import type {Note} from "./NoteDB";
import NoteListItem from './NoteListItem';
import glamorous from 'glamorous';

type NoteListProps = {
    noteList: Array<Note>,
};

const NoteListInner = glamorous.div({
    fontSize: '1.2rem',
});

const NoteList = ({noteList}: NoteListProps) => (
    <NoteListInner>
        { noteList.map(note => <NoteListItem key={`note-${note.id}`} note={note}/>)}
    </NoteListInner>
);

export default NoteList;