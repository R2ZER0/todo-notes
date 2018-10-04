import * as React from 'react';
import type {Note, ID} from "./NoteDB";

export type OnNoteChangeFn = (id: ID, title: string, content: string) => void;

type NoteEditorProps = {
    note: Note,
    onNoteChange: OnNoteChangeFn,
};

const NoteEditor = ({note, onNoteChangeFn}: NoteEditorProps) => <div>{ JSON.stringify(note) }</div>;

export default NoteEditor;