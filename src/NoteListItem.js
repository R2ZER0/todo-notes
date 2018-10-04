// @flow
import type {Note} from "./NoteDB";
import * as React from "react";
import glamorous from "glamorous";
import {Link} from "react-router-dom";
import {formatDate} from "./dateUtils";
import sanitizeHtml from "sanitize-html";

const ItemContainer = glamorous.div({
    height: '5rem',
    width: '100%',
    boxSizing: 'border-box',
    padding: '0.5rem',
    border: '1px solid #ccc',
    marginBottom: '0.4rem',
    backgroundColor: '#F5F5DC',
    overflow: 'hidden',
});

const Title = glamorous.div({
    marginBottom: '0.2rem',
    whiteSpace: 'nowrap',
});

const Modified = glamorous.div({
    color: 'grey',
});

type NoteListItemProps = {
    note: Note,
};

const sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
};

const formatTitle = (html): string => {
    return sanitizeHtml(html.replace(/ /g, '&nbsp;'), sanitizeConf);
};

const NoteListItem = ({note}: NoteListItemProps) => (
    <Link to={`/note/${note.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ItemContainer>
            <Title><div dangerouslySetInnerHTML={{ __html: formatTitle(note.title)} /* Our notes are html formatted */}/></Title>
            <Modified>{formatDate(new Date(note.lastModified))}</Modified>
        </ItemContainer>
    </Link>
);

export default NoteListItem;