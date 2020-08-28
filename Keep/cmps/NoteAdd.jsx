import { keepService } from '../service/keepService.js'

export class NoteAdd extends React.Component {

    state = {
        currPlaceholder: 'What\'s on your mind . . .',
        currNoteType: 'text',
        noteToAdd: keepService.getEmptyTxtNote(),
        value: '',
        name: 'text'
    }

    changeNoteType = (value) => {
        if (!value) value = this.state.currNoteType
        let currPlaceholder;
        let getEmpty;
        let currNoteType;
        let name;

        switch (value) {
            case 'image':
                currPlaceholder = 'Enter image URL';
                getEmpty = keepService.getEmptyImgNote;
                currNoteType = 'url';
                name = 'imgUrl'
                break;
            case 'checklist':
                currPlaceholder = 'Enter comma separated list';
                getEmpty = keepService.getEmptyCheckListNote;
                currNoteType = 'text';
                name = 'todos'
                break;
            case 'video':
                currPlaceholder = 'Enter video URL';
                getEmpty = keepService.getEmptyVideoNote;
                currNoteType = 'url'
                name = 'url'
                break;
            case 'file':
                currPlaceholder = 'Press to Upload audio';
                getEmpty = keepService.getEmptyAudioNote
                currNoteType = 'text' //need to change to file and add the types of files accepted
                name = 'file'
                break;
            case 'text':
                currPlaceholder = 'What\'s on your mind . . .';
                getEmpty = keepService.getEmptyTxtNote
                currNoteType = 'text'
                name = 'text'
                break;
        }
        this.setState({ currNoteType, currPlaceholder, name, noteToAdd: getEmpty, value:'' }, () => console.log(this.state))
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
                    this.props.onNoteToAdd(ev, this.state.noteToAdd)
                    this.changeNoteType()
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
