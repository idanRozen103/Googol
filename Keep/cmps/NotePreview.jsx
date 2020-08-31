import { NoteText } from "./note-types/NoteText.jsx";
import { NoteImg } from "./note-types/NoteImg.jsx";
import { NoteTodos } from "./note-types/NoteTodos.jsx";
import { NoteAudio } from "./note-types/NoteAudio.jsx";
import { NoteVideo } from "./note-types/NoteVideo.jsx";
import { NoteFooter } from "./NoteFooter.jsx";
const { Link } = ReactRouterDOM

var cmpMap = {
    NoteImg: NoteImg,
    NoteTodos: NoteTodos,
    NoteText: NoteText,
    NoteVideo: NoteVideo,
    NoteAudio: NoteAudio
}

export class NotePreview extends React.Component {
    render() {
        const { note, onDeleteNote, onChangeNoteBGC, onCopyNote, onPinNote, onTodoToggle, onTodoRemove } = this.props
        const DynamicCmp = cmpMap[note.type]

        return (
            <Link to={`/keep/${note.id}`}>
                <React.Fragment>
                    <DynamicCmp note={note} onTodoToggle={note.type === 'NoteTodos' && onTodoToggle} onTodoRemove={note.type === 'NoteTodos' && onTodoRemove} />
                    <NoteFooter onPinNote={onPinNote} onTodoToggle={onTodoToggle} note={note} onDeleteNote={onDeleteNote} onCopyNote={onCopyNote} onChangeNoteBGC={onChangeNoteBGC} />
                </React.Fragment >
            </Link>

        )

    }
}
