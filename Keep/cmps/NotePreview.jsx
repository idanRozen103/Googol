// import { NoteTxt } from "./note-types/NoteTxt.jsx";
import { NoteFooter } from "./NoteFooter.jsx";


export class NotePreview extends React.Component {
    render() {
        const { note, onDeleteNote, onChangeNoteBGC, onCopyNote, onPinNote } = this.props

        return (
            <React.Fragment>
                <h3>{note.info.title}</h3>
                <p>{note.info.text}</p>
                <NoteFooter onPinNote={onPinNote} note={note} onDeleteNote={onDeleteNote} onCopyNote={onCopyNote} onChangeNoteBGC={onChangeNoteBGC} />
            </React.Fragment>
        )
    }
}
