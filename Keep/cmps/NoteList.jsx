import { NotePreview } from './NotePreview.jsx'

export class NoteList extends React.Component {


    render() {
        const { notes, onDeleteNote, openModal, onChangeNoteBGC, onCopyNote, onPinNote } = this.props
        return (

            <ul className="container main-notes">
                {notes.map((note) =>
                    <li className="note-preview flex column" key={note.id} style={note.style} onClick={() => openModal(note)}>
                        <NotePreview onPinNote={onPinNote} note={note} onDeleteNote={onDeleteNote} onCopyNote={onCopyNote} onChangeNoteBGC={onChangeNoteBGC} />
                    </li>

                )}
            </ul>
        )
    }
}
