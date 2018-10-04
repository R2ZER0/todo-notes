import * as React from 'react';
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import type {Note, ID} from './NoteDB';
import type {OnNoteChangeFn} from "./NoteEditor";

type PageProps = {
    noteList: Array<Note>,
    currentNote: ?Note,
    onNoteChangeFn: OnNoteChangeFn,
};

const Page = ({noteList, currentNote, onNoteChangeFn}: PageProps) => (
    <div>
        <NoteList noteList={noteList}/>
        { currentNote ? <NoteEditor note={currentNote} onNoteChange={onNoteChangeFn}/> : <div>Choose a note from the list to begin editing</div> }
    </div>
);

export default Page;