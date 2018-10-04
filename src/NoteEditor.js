// @flow
import * as React from 'react';
import type {Note, ID} from "./NoteDB";
import ContentEditable from 'react-contenteditable';
import glamorous from 'glamorous';
import sanitizeHtml from 'sanitize-html';

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
});

const ContentEditor = glamorous(ContentEditable)({
    display: 'block',
    boxSizing: 'border-box',
    flexGrow: 1,
});

const sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
};

const formatTitle = (html): string => {
    return sanitizeHtml(html.replace(/ /g, '&nbsp;'), sanitizeConf);
};

const NoteEditor = ({note, onNoteChange}: NoteEditorProps) => (
    <EditorContainer>
        <TitleEditor tagName="h2" html={note.title} onChange={ (e) => onNoteChange(note.id, formatTitle(e.target.value), note.content) }/>
        <ContentEditor html={note.content} onChange={ (e) => onNoteChange(note.id, note.title, e.target.value) }/>
    </EditorContainer>
);

export default NoteEditor;