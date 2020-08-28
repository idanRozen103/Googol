
import { NoteFooter } from "./NoteFooter.jsx";

export class NoteModal extends React.Component {


    state = {
        noteToUpdate: ''
    }
    elInput = React.createRef()


    componentDidMount = () => {
        this.setState({ noteToUpdate: this.props.note })
    }

    checkKeyCode = (ev) => {
        if (ev.keyCode === 27) {
            this.props.onUpdateNote(this.props.note.id, this.state.noteToUpdate)
            this.props.closeModal()
        }
    }

    onInputChange = (ev) => {
        this.setState({
            noteToUpdate: {
                ...this.state.noteToUpdate,
                info: { ...this.state.noteToUpdate.info, [ev.target.name]: ev.target.value }
            }
        })
    }

    render() {
        const { note, closeModal, onDeleteNote, onChangeNoteBGC, onCopyNote, onUpdateNote, onPinNote } = this.props
        if (!this.state.noteToUpdate.info) return 'loading note'

        return (
            <div className='note-modal-wrapper' onKeyDown={this.checkKeyCode} onClick={() => { closeModal(); onUpdateNote(note.id, this.state.noteToUpdate) }} >
                <div className="note-modal-content note-preview flex column" style={note.style} onClick={(ev) => ev.stopPropagation()}>
                    <button className="close-note-modal" onClick={() => { closeModal(); onUpdateNote(note.id, this.state.noteToUpdate) }}>X</button>
                    <React.Fragment>
                        <input type="text" style={note.style} name="title" placeholder="Enter note title" onChange={this.onInputChange} value={this.state.noteToUpdate.info.title} />
                        <textarea rows="15" style={note.style} autoFocus className="note-modal-txt" ref={this.elInput} type="textarea" name="text" value={this.state.noteToUpdate.info.text} onChange={this.onInputChange} />
                        <NoteFooter onPinNote={onPinNote} onDeleteNote={onDeleteNote} onCopyNote={onCopyNote} note={note} onChangeNoteBGC={onChangeNoteBGC} />
                    </React.Fragment>
                </div>
            </div >
        )
    }
}
