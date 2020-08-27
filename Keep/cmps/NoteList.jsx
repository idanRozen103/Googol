import { NotePreview } from './NotePreview.jsx'

export class NoteList extends React.Component {
    render() {
        const {notes} = this.props
        return (

            <ul className="container main-notes">
                {notes.map((note) =>
                    <li className="note-preview flex column" key={note.id}>
                        <NotePreview note={note} />
                    </li>

                )}
            </ul>
        )
    }
}
