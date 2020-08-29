import { NoteText } from "./note-types/NoteText.jsx";
import { NoteImg } from "./note-types/NoteImg.jsx";
import { NoteTodos } from "./note-types/NoteTodos.jsx";
import { NoteVideo } from "./note-types/NoteVideo.jsx";
import { NoteFooter } from "./NoteFooter.jsx";
const { Link } = ReactRouterDOM


var cmpMap = {
    NoteImg: NoteImg,
    NoteTodos: NoteTodos,
    NoteText: NoteText,
    NoteVideo: NoteVideo
}

export class NotePreview extends React.Component {
    render() {
        const { note, onDeleteNote, onChangeNoteBGC, onCopyNote, onPinNote } = this.props
        const DynamicCmp = cmpMap[note.type]
        return (
            <Link to={`/keep/${note.id}`}>
                <React.Fragment>
                    <DynamicCmp note={note} />
                    <NoteFooter onPinNote={onPinNote} note={note} onDeleteNote={onDeleteNote} onCopyNote={onCopyNote} onChangeNoteBGC={onChangeNoteBGC} />
                </React.Fragment >
            </Link>

        )

    }
}
