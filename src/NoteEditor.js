// @flow
import * as React from 'react';
import type {Note, ID} from "./NoteDB";
import ContentEditable from 'react-contenteditable';
import glamorous from 'glamorous';
import {formatDateAndTime} from './dateUtils';

export type OnNoteChangeFn = (id: ID, title: string, content: string) => void;

type NoteEditorProps = {
    note: Note,
    onNoteChange: OnNoteChangeFn,
};

const EditorContainer = glamorous.div({
    boxSizing: 'border-box',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
});

const TitleEditor = glamorous(ContentEditable)({
    boxSizing: 'border-box',
    height: '3rem',
    display: 'block',
    borderBottom: '1px solid grey',
    padding: '0.5rem',
    margin: '0.5rem',
    whiteSpace: 'nowrap',
});

const ContentEditor = glamorous(ContentEditable)({
    display: 'block',
    boxSizing: 'border-box',
    flexGrow: 1,
    overflowY: 'scroll',
    margin: '1em',
});

const DateBar = glamorous.div({
    height: '1rem',
    color: 'grey',
    fontSize: '0.85rem',
    textAlign: 'center',
});

const NoteEditor = ({note, onNoteChange}: NoteEditorProps) => (
    <EditorContainer>
        <DateBar>Last edited: {formatDateAndTime(new Date(note.lastModified))}</DateBar>
        <TitleEditor tagName="h2" html={note.title} onChange={ (e) => onNoteChange(note.id, e.target.value, note.content) }/>
        <ContentEditor html={note.content} onChange={ (e) => onNoteChange(note.id, note.title, e.target.value) }/>
    </EditorContainer>
);

export default NoteEditor;