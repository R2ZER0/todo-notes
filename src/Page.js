import * as React from 'react';
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import type {Note, ID} from './NoteDB';
import type {OnNoteChangeFn} from "./NoteEditor";
import glamorous from 'glamorous';

const PageContainer = glamorous.div({
    display: "flex",
    boxSizing: 'border-box',
    flexDirection: "row",
    height: '100vh',
});

const NoteListContainer = glamorous.div({
    height: '100%',
    boxSizing: 'border-box',
    width: '15vw',
    minWidth: '15rem',
    borderRight: '1px solid cyan'
});

const NoteEditorContainer = glamorous.div({
    height: '100%',
    boxSizing: 'border-box',
    flexGrow: 1,
});

type PageProps = {
    noteList: Array<Note>,
    currentNote: ?Note,
    onNoteChangeFn: OnNoteChangeFn,
};

const Page = ({noteList, currentNote, onNoteChangeFn}: PageProps) => (
    <PageContainer>
        <NoteListContainer>
            <NoteList noteList={noteList}/>
        </NoteListContainer>
        <NoteEditorContainer>
            { currentNote ?
                <NoteEditor note={currentNote} onNoteChange={onNoteChangeFn}/> :
                <div>Choose a note from the list to begin editing</div> }
        </NoteEditorContainer>
    </PageContainer>
);

export default Page;