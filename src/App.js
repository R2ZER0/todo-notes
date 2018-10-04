// @flow
import * as React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import NoteDB from './NoteDB';
import type {ID, Note} from './NoteDB';
import Page from "./Page";

type AppProps = {};

type AppState = {
    noteDb: NoteDB;
    noteList: Array<Note>,
    currentNote: ?Note,
};


export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        let noteDb: NoteDB = new NoteDB();

        // some example data
        noteDb.createNote("First Note", "This is the first note that was created");
        noteDb.createNote("Second Note", "Another one!");
        noteDb.createNote("And Another", "What a surprise, it's a note!");

        noteDb.onChange(this.onNoteDbUpdate.bind(this));

        this.state = {
            noteDb: noteDb,
            noteList: noteDb.getNoteList(),
        };

    }

    onNoteDbUpdate(noteDb) {
        this.setState({
            noteList: noteDb.getNoteList()
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={ () => (
                        <Page noteList={this.state.noteList} currentNote={null}/>
                    )}/>
                    <Route path="/note/:id" render={ ({match}) => (
                        <Page noteList={this.state.noteList} currentNote={this.state.noteDb.getNote(match.params.id)}/>
                    )}/>
                </div>
            </Router>
        );
    }

}