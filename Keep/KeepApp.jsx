
import { NoteList } from './cmps/NoteList.jsx'
import { NoteModal } from './cmps/NoteModal.jsx'
import { NoteAdd } from './cmps/NoteAdd.jsx'
import { keepService } from './service/keepService.js'



export class KeepApp extends React.Component {

    state = {
        notes: [],
        isModalOpen: false,
        selectedNote: '',
    }

    componentDidMount() {
        this.loadNotes()

    }

    loadNotes() {
        keepService.query().then(notes => {
            this.setState({ notes, noteToAdd: keepService.getEmptyTxtNote() })
        })
    }

    openModal = (note) => {
        this.setState({ isModalOpen: true, selectedNote: note }
        )
    }

    onChangeNoteBGC = (noteId, color) => {
        keepService.changeNoteBGC(noteId, color)
        this.loadNotes()
    }

    closeModal = () => {
        this.setState({ isModalOpen: false, selectedNote: '' })

    }

    onUpdateNote = (noteId, newTxt) => {
        keepService.updateNote(noteId, newTxt)
            .then(() => this.loadNotes())
    }

    onNoteToAdd = (ev, note) => {
        ev.preventDefault();
        keepService.addTxtNote(note)
        this.loadNotes()
    }

    onDeleteNote = (ev, noteId) => {
        ev.stopPropagation();
        this.setState({ isModalOpen: false, selectedNote: '' })
        keepService.deleteNote(noteId)
            .then(() => this.loadNotes())
    }

    onCopyNote = (ev, note) => {
        ev.preventDefault();
        keepService.copyNote(note)
            .then(() => this.loadNotes())
    }

    onPinNote = (ev, noteId) => {
        ev.preventDefault();
        keepService.pinNote(noteId)
    }

    render() {
        return (
            <React.Fragment>
                <NoteAdd onNoteToAdd={this.onNoteToAdd} />
                <NoteList notes={this.state.notes} onPinNote={this.onPinNote} onDeleteNote={this.onDeleteNote} onCopyNote={this.onCopyNote} openModal={this.openModal} onChangeNoteBGC={this.onChangeNoteBGC} />
                {this.state.isModalOpen && <NoteModal onPinNote={this.onPinNote} note={this.state.selectedNote} onCopyNote={this.onCopyNote} closeModal={this.closeModal} onChangeNoteBGC={this.onChangeNoteBGC} onUpdateNote={this.onUpdateNote} onDeleteNote={this.onDeleteNote} />}
            </React.Fragment >
        )
    }
}



