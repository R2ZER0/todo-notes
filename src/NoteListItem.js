import type {Note} from "./NoteDB";
import * as React from "react";
import glamorous from "glamorous";

type NoteListItemProps = {
    note: Note,
};

const NoteListItem = ({note}: NoteListItemProps) => (
    <div>
        <div>{note.title}</div>
        <div>{note.lastModified}</div>
    </div>
);

export default NoteListItem;