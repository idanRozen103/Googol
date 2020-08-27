
// import { NoteTxt } from './cmps/note-types/NoteTxt.jsx'
import { NoteList } from './cmps/NoteList.jsx'
import { NoteModal } from './cmps/NoteModal.jsx'
import { keepService } from './service/keepService.js'



export class KeepApp extends React.Component {

    state = {
        notes: [],
        isModalOpen: false,
        selectedNote: '',
        currView: '',
        txtNoteToAdd: keepService.getEmptyTxtNote()

    }

    componentDidMount() {
        this.loadNotes()

    }

    loadNotes() {
        keepService.query().then(notes => {
            this.setState({ notes })
        })

    }

    HandleInput = (ev) => {
        this.setState({
            txtNoteToAdd: { ...this.state.txtNoteToAdd, [ev.target.name]: ev.target.value }
        })

    }

    openModal = (note) => {
        this.setState({ isModalOpen: true, selectedNote: note }, () => {
            console.log(this.state)
        })
    }
    closeModal = (noteId, newTxt) => {
        console.log(noteId, newTxt);
        this.setState({ isModalOpen: false, selectedNote: '' })
        keepService.updateNote(noteId, newTxt)
            .then(() => this.loadNotes())
    }

    onTxtNoteToAdd = (ev, note) => {
        ev.preventDefault();
        keepService.addTxtNote(note)
        this.loadNotes()
    }

    onDeleteNote = (noteId) => {
        keepService.deleteNote(noteId)
            .then(() => this.loadNotes())
    }




    render() {
        const { currView } = this.state.currView
        // const DynamicCmp = (props) => {
        //     switch (currView) {
        //         case 'Hello':
        //             return <NoteTxt {...props} />
        //         case 'GoodBye':
        //             return <NoteTodos {...props} />
        //         case 'WelcomeBack':
        //             return <NoteImg {...props} />
        //         default:
        //             return //...some default error view
        //     }
        // }
        return (
            <React.Fragment>
                <div className="flex notes-input-line" >
                    <form onSubmit={(ev) => {
                        this.onTxtNoteToAdd(ev, this.state.txtNoteToAdd)
                    }}>
                        < input name="txt" type="text" placeholder="What's on your mind . . ." onChange={(ev) => { this.HandleInput(ev) }} />
                    </form>
                    <div className="notes-input-btns">
                        <input type="radio" id="text" name="input-btn" value="text" defaultChecked />
                        <label htmlFor="text" ><i className="fas fa-font"></i></label>
                        <input type="radio" id="video" name="input-btn" value="video" />
                        <label htmlFor="video" ><i className="fab fa-youtube"></i></label>
                        <input type="radio" id="img" name="input-btn" value="img" />
                        <label htmlFor="img" ><i className="far fa-image"></i></label>
                        <input type="radio" id="audio" name="input-btn" value="audio" />
                        <label htmlFor="audio" ><i className="fas fa-volume-up"></i></label>
                        <input type="radio" id="todos" name="input-btn" value="todos" />
                        <label htmlFor="todos" ><i className="fas fa-list"></i></label>
                    </div>
                </div >

                <NoteList notes={this.state.notes} onDeleteNote={this.onDeleteNote} openModal={this.openModal} />
                {this.state.isModalOpen && <NoteModal note={this.state.selectedNote} closeModal={this.closeModal} />}
            </React.Fragment >
        )
    }
}



