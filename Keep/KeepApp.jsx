
import { NoteList } from './cmps/NoteList.jsx'
import { NoteModal } from './cmps/NoteModal.jsx'
import { keepService } from './service/keepService.js'



export class KeepApp extends React.Component {

    state = {
        notes: [],
        isModalOpen: false,
        selectedNote: '',
        currPlaceholder: 'What\'s on your mind . . .',
        currNoteType: 'text',
        noteToAdd: keepService.getEmptyTxtNote()
    }

    componentDidMount() {
        this.loadNotes()

    }

    loadNotes() {
        keepService.query().then(notes => {
            this.setState({ notes, noteToAdd: keepService.getEmptyTxtNote() })
        })
    }

    HandleInput = (ev) => {
        this.setState({
            noteToAdd: {
                ...this.state.noteToAdd,
                info: { ...this.state.noteToAdd.info, txt: ev.target.value }
            }
        })
    }

    openModal = (note) => {
        this.setState({ isModalOpen: true, selectedNote: note }
        )
    }

    closeModal = (noteId, newTxt) => {
        this.setState({ isModalOpen: false, selectedNote: '' })
        keepService.updateNote(noteId, newTxt)
            .then(() => this.loadNotes())
    }

    onTxtNoteToAdd = (ev, note) => {
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

    changeNoteType = (value) => {

        let currPlaceholder;
        let getEmpty;
        let currNoteType;

        switch (value) {
            case 'img':
                currPlaceholder = 'Enter image URL';
                getEmpty = keepService.getEmptyImgNote;
                currNoteType = 'image';
                break;
            case 'checklist':
                currPlaceholder = 'Enter comma separated list';
                getEmpty = keepService.getEmptyCheckListNote;
                currNoteType = 'checkbox';
                break;
            case 'video':
                currPlaceholder = 'Enter video URL';
                getEmpty = keepService.getEmptyVideoNote;
                currNoteType = 'url'
                break;
            case 'audio':
                currPlaceholder = 'Enter to Upload audio';
                getEmpty = keepService.getEmptyAudioNote
                currNoteType = 'file' //need to add the types of files accepted
                break;
            case 'text':
                currPlaceholder = 'What\'s on your mind . . .';
                getEmpty = keepService.getEmptyTxtNote
                currNoteType = 'text'
                break;
        }
        this.setState({ currNoteType, currPlaceholder, noteToAdd: getEmpty }, () => console.log(this.state))
    }

    render() {
        return (
            <React.Fragment>
                <div className="flex notes-input-line" >
                    <form onSubmit={(ev) => {
                        this.onTxtNoteToAdd(ev, this.state.noteToAdd)
                    }}>
                        <input name="txt" type={this.state.currNoteType} value={this.state.currNoteType === 'text' ? this.state.noteToAdd.info.txt : ''} placeholder={this.state.currPlaceholder} onChange={(ev) => { this.HandleInput(ev) }} />
                    </form>
                    <div className="notes-input-btns">
                        <input type="radio" id="text" name="input-btn" value="text" defaultChecked onClick={(ev) => this.changeNoteType(ev.target.value)} />
                        <label htmlFor="text" ><i className="fas fa-font"></i></label>
                        <input type="radio" id="video" name="input-btn" value="video" onClick={(ev) => this.changeNoteType(ev.target.value)} />
                        <label htmlFor="video" ><i className="fab fa-youtube"></i></label>
                        <input type="radio" id="img" name="input-btn" value="image" onClick={(ev) => this.changeNoteType(ev.target.value)} />
                        <label htmlFor="img" ><i className="far fa-image"></i></label>
                        <input type="radio" id="audio" name="input-btn" value="file" onClick={(ev) => this.changeNoteType(ev.target.value)} />
                        <label htmlFor="audio" ><i className="fas fa-volume-up"></i></label>
                        <input type="radio" id="checklist" name="input-btn" value="checklist" onClick={(ev) => this.changeNoteType(ev.target.value)} />
                        <label htmlFor="checklist" ><i className="fas fa-list"></i></label>
                    </div>
                </div >

                <NoteList notes={this.state.notes} onDeleteNote={this.onDeleteNote} openModal={this.openModal} />
                {this.state.isModalOpen && <NoteModal note={this.state.selectedNote} closeModal={this.closeModal} onDeleteNote={this.onDeleteNote} />}
            </React.Fragment >
        )
    }
}



