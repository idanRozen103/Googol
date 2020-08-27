
// import { NoteTxt } from './cmps/note-types/NoteTxt.jsx'
import { NoteList } from './cmps/NoteList.jsx'
import { keepService } from './service/keepService.js'


export class KeepApp extends React.Component {

    state = {
        notes: [],
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

    handleInputFocus = (ev) => {
        this.setState({
            txtNoteToAdd: { ...this.state.reviewToAdd, [ev.target.name]: ev.target.value }
        })

    }

    noteToAdd = (ev, note) => {
        ev.preventDefault();
        // keepService.addTxtNote(note)
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
                    <form hidden onSubmit={(ev) => {
                        this.onAddReview(ev, this.state.txtNoteToAdd)
                    }}>
                        < input name="txt" type="text" name="" id="" placeholder="What's on your mind . . ." onClick={this.handleInputFocus} />
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

                {/* {this.state.txtNoteToAdd.length && <NoteTxt />} */}
                <NoteList notes={this.state.notes} />
            </React.Fragment >
        )
    }
}



