// import { NoteTxt } from "./note-types/NoteTxt.jsx";
import { NoteFooter } from "./NoteFooter.jsx";


export class NotePreview extends React.Component {
    render() {
        const { note, onDeleteNote } = this.props

        return (
            <React.Fragment>
                <h3>{note.info.title}</h3>
                <p>{note.info.txt}</p>
                <NoteFooter note={note} onDeleteNote={onDeleteNote} />
            </React.Fragment>
        )
    }
}
