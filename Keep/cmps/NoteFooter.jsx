import { ColorPalette } from './ColorPalette.jsx'
export class NoteFooter extends React.Component {


    state = {
        isColorOpen: false,
        pinColor: 'rgb(156, 152, 152)'
    }

    componentDidMount = () => {
        if (this.props.note.isPinned) this.setState({ pinColor: 'black' })
    }

    onOpenColors = (ev) => {
        ev.preventDefault()
        this.setState({ isColorOpen: true })

    }

    closeColors = () => {
        this.setState({ isColorOpen: false })
    }

    changePinColor = () => {
        this.setState({ pinColor: this.props.note.isPinned ? 'rgb(156, 152, 152)' : 'black' })
    }

    onOpenColors = (ev) => {
        ev.preventDefault()
        this.setState({ isColorOpen: true })

    }

    closeColors = () => {
        this.setState({ isColorOpen: false })
    }

    render() {
        const { note, onDeleteNote, onChangeNoteBGC, onCopyNote, onPinNote } = this.props
        function noteType() {
            switch (note.type) {
                case 'NoteText':
                    return <i className="fas fa-font"></i>
                case 'NoteImg':
                    return <i className="far fa-image"></i>
                case 'NoteTodos':
                    return <i className="fas fa-list"></i>
                case 'NoteAudio':
                    return <i className="fas fa-volume-up"></i>
                case 'NoteVideo':
                    return <i className="fab fa-youtube"></i>
            }
        }
        return (
            <div className="note-footer flex">
                {noteType()}
                <div className="note-btns">
                    <input type="radio" id="pin" name="note-btn" value="pin" />
                    <label htmlFor="pin"><i className="fas fa-thumbtack" style={{ color: this.state.pinColor }} onClick={(ev) => { ev.stopPropagation(); this.changePinColor(); onPinNote(ev, note.id) }}></i></label>
                    <input type="radio" id="edit" name="note-btn" value="edit" />
                    <label htmlFor="edit" ><i className="fas fa-palette" onClick={(ev) => {
                        ev.stopPropagation()
                        this.onOpenColors(ev)
                    }}></i></label>
                    <input type="radio" id="note-clone" name="note-btn" value="note-clone" />
                    <label htmlFor="note-clone" ><i className="fas fa-clone" onClick={(ev) => { ev.stopPropagation(); onCopyNote(ev, note) }}></i></label>
                    <input type="radio" id="note-delete" name="note-btn" value="note-delete" />
                    <label htmlFor="note-delete" ><i className="fas fa-trash-alt" onClick={(ev) => { onDeleteNote(ev, note.id) }} ></i></label>
                    {this.state.isColorOpen && <ColorPalette onChangeNoteBGC={onChangeNoteBGC} note={note} closeColors={this.closeColors} />}
                </div >
            </div >
        )
    }
}


