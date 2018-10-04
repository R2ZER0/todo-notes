import type {Note} from "./NoteDB";
import * as React from "react";
import glamorous from "glamorous";
import {Link} from "react-router-dom";

type NoteListItemProps = {
    note: Note,
};

const NoteListItem = ({note}: NoteListItemProps) => (
    <Link to={`/note/${note.id}`} style={{ textDecoration: 'none' }}>
        <div>
            <div>{note.title}</div>
            <div>{note.lastModified}</div>
        </div>
    </Link>
);

export default NoteListItem;