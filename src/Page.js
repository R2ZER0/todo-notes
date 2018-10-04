import * as React from 'react';
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";

const Page = () => (
    <div>
        <NoteList/>
        <NoteEditor/>
    </div>
);

export default Page;