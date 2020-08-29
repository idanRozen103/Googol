import { NotePreview } from './NotePreview.jsx'

export class NoteList extends React.Component {


    render() {
        const { notes, onDeleteNote, openModal, onChangeNoteBGC, onCopyNote, onPinNote, onTodoToggle } = this.props
        const pinnedNotes = notes.filter(note => note.isPinned)
        const unPinnedNotes = notes.filter(note => !note.isPinned)
        var hiddenDiv = !pinnedNotes.length ? 'hide' : ''
        return (
            <React.Fragment>
                <ul className={`container main-notes pinned-notes ${hiddenDiv}`} >
                    {pinnedNotes.map(note => (
                        <li className="note-preview flex column" key={note.id} style={note.style} onClick={() => openModal(note)}>
                            <NotePreview onPinNote={onPinNote} onTodoToggle={onTodoToggle} note={note} onDeleteNote={onDeleteNote} onCopyNote={onCopyNote} onChangeNoteBGC={onChangeNoteBGC} />
                        </li>)

                    )}
                </ul>
                <ul className="container main-notes">
                    {unPinnedNotes.map((note) =>
                        <li className="note-preview flex column" key={note.id} style={note.style} onClick={() => openModal(note)}>
                            <NotePreview onTodoToggle={onTodoToggle} onPinNote={onPinNote} note={note} onDeleteNote={onDeleteNote} onCopyNote={onCopyNote} onChangeNoteBGC={onChangeNoteBGC} />
                        </li>

                    )}
                </ul>

            </React.Fragment>
        )
    }
}
