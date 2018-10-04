import * as React from 'react';
import type {Note} from "./NoteDB";

type NoteListProps = {
    noteList: Array<Note>,
};

const NoteList = ({noteList}: NoteListProps) => <div>{ JSON.stringify(noteList) }</div>;

export default NoteList;