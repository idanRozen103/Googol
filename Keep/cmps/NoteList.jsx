import { NotePreview } from './NotePreview.jsx'

export class NoteList extends React.Component {

    
    render() {
        const { notes, onDeleteNote, openModal } = this.props
        return (

            <ul className="container main-notes">
                {notes.map((note) =>
                    <li className="note-preview flex column" key={note.id} onClick={() => openModal(note)}>
                        <NotePreview note={note} onDeleteNote={onDeleteNote} />
                    </li>

                )}
            </ul>
        )
    }
}
