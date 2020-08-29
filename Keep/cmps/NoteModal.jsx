const { withRouter } = ReactRouterDOM
import { NoteFooter } from "./NoteFooter.jsx";
import { keepService } from '../service/keepService.js'

class _NoteModal extends React.Component {


    state = {
        noteToUpdate: '',
        isModalOpen: false
    }
    elInput = React.createRef()


    componentDidMount = () => {
        const noteId = this.props.history.location.pathname.substring(6)
        keepService.getNote(noteId)
            .then(noteToUpdate => {
                this.setState({ noteToUpdate, isModalOpen: true })
            })
    }


    checkKeyCode = (ev) => {
        if (ev.keyCode === 27) {
            this.props.onUpdateNote(this.props.note.id, this.state.noteToUpdate)
            this.props.closeModal()
            this.props.history.push('/keep')
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


    DynamicCmp = () => {
        const note = this.state.noteToUpdate

        switch (note.type) {
            case 'NoteText':
                return <textarea rows="15" style={note.style} autoFocus className="note-modal-txt" ref={this.elInput} type="textarea" name="text" value={this.state.noteToUpdate.info.text} onChange={this.onInputChange} />
            case 'NoteImg':
                return <img src={note.info.url} width="100%" height="82%" />
            case 'NoteTodos':
                return (<ul>
                    {note.info.todos.map(todo => <li key={todo.id} className={todo.isDone ? 'checked' : ''} onClick={(ev) => { this.props.onTodoToggle(this, ev, note.id, todo.id) }}><input type="checkbox" onChange={() => console.log('')} checked={todo.isDone ? true : false} />{todo.text}
                    </li>
                    )}
                    <br />
                    <small>Created At: {note.info.timeCreated.substring(0, note.info.timeCreated.length - 32)}</small>
                </ul>)
            case 'NoteVideo':
                return <iframe width="380" height="240" controls src="https://www.youtube.com/embed/MYJldv7ZhOA" frameBorder="0" />
            case 'NoteAudio':
                return <audio controls src={note.info.url} type="audio/mpeg" />
        }
    }

    render() {
        const { onDeleteNote, onChangeNoteBGC, onCopyNote, closeModal, onUpdateNote, onPinNote, onTodoToggle } = this.props
        const note = this.state.noteToUpdate
        if (!note) return 'loading...'

        return (
            <div className='note-modal-wrapper' onKeyDown={this.checkKeyCode} onClick={() => {
                closeModal();
                this.props.history.push('/keep')
                onUpdateNote(note.id, this.state.noteToUpdate);
            }}>
                <div className="note-modal-content note-preview flex column" style={note.style} onKeyDown={this.checkKeyCode} onClick={(ev) => {
                    ev.stopPropagation(); onUpdateNote(note.id, this.state.noteToUpdate)
                }} >
                    <button className="close-note-modal"
                        onClick={() => {
                            closeModal();
                            this.props.history.push('/keep')
                        }}
                    >X</button>
                    <React.Fragment>
                        <input type="text" style={note.style} name="title" placeholder="Enter note title" onChange={this.onInputChange} value={this.state.noteToUpdate.info.title} />
                        <this.DynamicCmp />
                        <NoteFooter onPinNote={onPinNote} onDeleteNote={onDeleteNote} onCopyNote={onCopyNote} note={note} onChangeNoteBGC={onChangeNoteBGC} />
                    </React.Fragment>
                </div>
            </div >
        )
    }
}


export const NoteModal = withRouter(_NoteModal)