const { Route } = ReactRouterDOM

import { eventBus } from '.././services/eventBusService.js'
import { NoteList } from './cmps/NoteList.jsx'
import { NoteModal } from './cmps/NoteModal.jsx'
import { SearchNote } from './cmps/SearchNote.jsx'
import { NoteAdd } from './cmps/NoteAdd.jsx'
import { keepService } from './service/keepService.js'



export class KeepApp extends React.Component {

    state = {
        notes: [],
        filter: '',
        isModalOpen: false,
        selectedNote: '',
    }

    componentDidMount() {
        if (this.props.location.pathname.length > 6) this.setState({ isModalOpen: true })
        else this.loadNotes()
        console.log(this.state.notes);

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
            .then(() => {
                this.loadNotes()
            })
    }

    onNoteToAdd = (ev, note) => {
        ev.preventDefault();
        if (note.info.todos && note.info.todos.length) {
            let splitedNote = { ...note, info: { ...note.info, todos: note.info.todos.split(',') } }
            keepService.addNote(splitedNote)
            this.loadNotes()
            return
        }
        if (note.type === 'NoteTodos' && !note.info.todos) return
        keepService.addNote(note)
        this.loadNotes()
    }

    onDeleteNote = (ev, noteId) => {
        ev.stopPropagation();
        this.setState({ isModalOpen: false, selectedNote: '' })
        this.props.history.push('/keep')
        keepService.deleteNote(noteId)
            .then(() => {
                this.loadNotes()
                eventBus.emit('notify', { msg: 'Note deleted', type: 'success' })
            })
    }

    onCopyNote = (ev, note) => {
        ev.preventDefault();
        keepService.copyNote(note)
            .then(() => this.loadNotes())
    }

    onPinNote = (ev, noteId) => {
        ev.preventDefault();
        keepService.pinNote(noteId)
            .then(() => this.loadNotes())
    }

    onSetFilter = (value) => {
        value.trim()
        if (!value) value = ''
        this.setState({ filter: value })
    }

    onTodoToggle = (el, ev, noteId, todoId) => {
        ev.stopPropagation();
        keepService.toggleTodo(noteId, todoId)
        this.loadNotes()
    }

    getNoteForDisplay = () => {

        const notes = this.state.notes.filter(note => {
            return (note.info.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
                note.info.text && note.info.text.toLowerCase().includes(this.state.filter.toLowerCase())) ||

                (note.info.todos) && (note.info.todos.some(todo => todo.text.toLowerCase().includes(this.state.filter.toLowerCase())))
        })
        return notes;
    }


    render() {
        const notes = this.getNoteForDisplay()
        return (
            <React.Fragment>
                <NoteAdd onNoteToAdd={this.onNoteToAdd} />
                {!this.state.selectedNote && <SearchNote filter={this.state.filter} onSetFilter={this.onSetFilter} />}
                <NoteList notes={notes} onPinNote={this.onPinNote} onTodoToggle={this.onTodoToggle} onDeleteNote={this.onDeleteNote} onCopyNote={this.onCopyNote} openModal={this.openModal} onChangeNoteBGC={this.onChangeNoteBGC} />
                <Route path="/keep/:id">
                    {this.state.isModalOpen && <NoteModal onPinNote={this.onPinNote} note={this.state.selectedNote} onCopyNote={this.onCopyNote} closeModal={this.closeModal} onTodoToggle={this.onTodoToggle} onChangeNoteBGC={this.onChangeNoteBGC} onUpdateNote={this.onUpdateNote} onDeleteNote={this.onDeleteNote} />}
                </Route>
            </React.Fragment >
        )
    }
}



