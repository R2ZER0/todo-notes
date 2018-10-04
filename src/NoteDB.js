// @flow

export type ID = string;

export type Note = {
    id: ID,
    title: string,
    content: string,
    lastModified: Date,
};

export default class NoteDB {
    notedb: Map<string, Note>;
    nextid: number;
    onChangeCb: (NoteDB) => void;

    constructor(onChange: ?(NoteDB) => void) {
        this.notedb = new Map();
        this.nextid = 1;
        this.onChangeCb = onChange;
    }

    _nextId() {
        return `${this.nextid++}`;
    }

    onChange(fn: ?(NoteDB) => void) {
        this.onChangeCb = fn;
    }

    createNote(title: string, content: string): Note {
        let newId: ID = this._nextId();
        let newNote: Note = {
            id: newId,
            title: title,
            content: content,
            lastModified: Date.now(),
        };

        this.notedb.set(newId, newNote);

        if(this.onChangeCb) {
            this.onChangeCb(this);
        }

        return newNote;
    }

    updateNote(id: ID, title: string, content: string): ?Note {
        if(this.notedb.has(id)) {
            let newNote: Note = {
                id: id,
                title: title,
                content: content,
                lastModified: Date.now(),
            };

            this.notedb.set(id, newNote);

            if(this.onChangeCb) {
                this.onChangeCb(this);
            }

            return newNote;
        } else {
            return null;
        }
    }

    getNote(id: ID): ?Note {
        if(this.notedb.has(id)) {
            return this.notedb.get(id);
        } else {
            return null;
        }
    }

    getNoteList(): Array<Note> {
        return Array.from(this.notedb.values());
    }
}