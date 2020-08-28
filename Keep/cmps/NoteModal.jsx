
import { NoteFooter } from "./NoteFooter.jsx";

export class NoteModal extends React.Component {


    state = {
        noteToUpdate: ''
    }

    elInput = React.createRef()


    componentDidMount = () => {
        console.log(this.props);
        this.setState({ noteToUpdate: this.props.note }, () => console.log(this.state))

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
        const { note, closeModal, onDeleteNote } = this.props
        if (!this.state.noteToUpdate.info) return 'loading note'

        return (
            <div className='note-modal-wrapper' onClick={() => closeModal(note.id, this.state.noteToUpdate)} >
                <div className="note-modal-content note-preview" onClick={(ev) => ev.stopPropagation()}>
                    <button onClick={() => closeModal(note.id, this.state.noteToUpdate)}>X</button>
                    <React.Fragment>
                        <input type="text" name="title" placeholder="Enter note title" onChange={this.onInputChange} value={this.state.noteToUpdate.info.title} />
                        <textarea rows="10"  autoFocus className="note-modal-txt" ref={this.elInput} type="textarea" name="txt" value={this.state.noteToUpdate.info.txt} onChange={this.onInputChange} />
                        <NoteFooter onDeleteNote={onDeleteNote} note={note} />
                     </React.Fragment>
                </div>
            </div >
        )
    }
}
