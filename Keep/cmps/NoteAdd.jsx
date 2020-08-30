import { keepService } from '../service/keepService.js'

export class NoteAdd extends React.Component {

    state = {
        currPlaceholder: 'What\'s on your mind . . .',
        currNoteType: 'text',
        noteToAdd: keepService.getEmptyTxtNote(),
        value: '',
        name: 'text',
        currentButtonPressd: 'text'
    }

    changeNoteType = (value) => {
        let currPlaceholder;
        let noteToAdd;
        let currNoteType;
        let currentButtonPressd
        let name;

        switch (value) {
            case 'image':
                currPlaceholder = 'Enter image URL';
                noteToAdd = keepService.getEmptyImgNote();
                currNoteType = 'url';
                name = 'url';
                currentButtonPressd = 'image';
                break;
            case 'checklist':
                currPlaceholder = 'Enter comma separated list';
                noteToAdd = keepService.getEmptyCheckListNote();
                currNoteType = 'text';
                name = 'todos';
                currentButtonPressd = 'checklist';
                break;
            case 'video':
                currPlaceholder = 'Enter video URL';
                noteToAdd = keepService.getEmptyVideoNote();
                currNoteType = 'url';
                name = 'url';
                currentButtonPressd = 'video';
                break;
            case 'file':
                currPlaceholder = 'Enter audio URL';
                noteToAdd = keepService.getEmptyAudioNote();
                currNoteType = 'url'
                name = 'url';
                currentButtonPressd = 'file';
                break;
            case 'text':
                currPlaceholder = 'What\'s on your mind . . .';
                noteToAdd = keepService.getEmptyTxtNote();
                currNoteType = 'text'
                name = 'text'
                currentButtonPressd = 'text';
                break;
        }
        this.setState({ currNoteType, currPlaceholder, name, noteToAdd, value: '', currentButtonPressd })
    }

    HandleInput = (ev) => {
        const value = ev.target.value
        const name = ev.target.name
        this.setState({
            value,
            noteToAdd: {
                ...this.state.noteToAdd,
                info: { ...this.state.noteToAdd.info, [name]: value }
            }
        })
    }

    render() {
        return (
            <div className="flex notes-input-line" >
                <form onSubmit={(ev) => {
                    this.changeNoteType(this.state.currentButtonPressd)
                    this.props.onNoteToAdd(ev, this.state.noteToAdd)
                }}>
                    <input name={this.state.name} type={this.state.currNoteType} value={this.state.value} placeholder={this.state.currPlaceholder} onChange={(ev) => { this.HandleInput(ev) }} />
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
        )
    }
}
