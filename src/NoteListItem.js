// @flow
import type {Note} from "./NoteDB";
import * as React from "react";
import glamorous from "glamorous";
import {Link} from "react-router-dom";
import {formatDate} from "./dateUtils";

const ItemContainer = glamorous.div({
    height: '5rem',
    width: '100%',
    boxSizing: 'border-box',
    padding: '1rem',
});

const Title = glamorous.div({
    marginBottom: '0.5rem',
});

const Modified = glamorous.div({
    color: 'grey',
});

type NoteListItemProps = {
    note: Note,
};

const NoteListItem = ({note}: NoteListItemProps) => (
    <Link to={`/note/${note.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ItemContainer>
            <Title>{note.title}</Title>
            <Modified>{formatDate(new Date(note.lastModified))}</Modified>
        </ItemContainer>
    </Link>
);

export default NoteListItem;