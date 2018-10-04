// @flow
import * as React from 'react';
import type {Note} from "./NoteDB";
import NoteListItem from './NoteListItem';
import glamorous from 'glamorous';
import {Button} from 'reactstrap';

export type CreateNoteFn = () => void;

type NoteListProps = {
    noteList: Array<Note>,
    createNoteFn: CreateNoteFn,
};

const NoteListHeader = glamorous.div({
    height: '5em',
    paddingTop: '1.5rem',
    '> button': {
        margin: '0 auto',
        display: 'block',
    },
});

const NoteListInner = glamorous.div({
    fontSize: '1.2rem',
});

const NoteList = ({noteList, createNoteFn}: NoteListProps) => (
    <NoteListInner>
        <NoteListHeader key="header">
            <Button onClick={createNoteFn}>New Note</Button>
        </NoteListHeader>
        { noteList.map(note => <NoteListItem key={`note-${note.id}`} note={note}/>)}
    </NoteListInner>
);

export default NoteList;