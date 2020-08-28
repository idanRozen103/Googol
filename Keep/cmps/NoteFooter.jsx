
export class NoteFooter extends React.Component {

    componentDidMount = () => {
    }

    render() {
        const { note, onDeleteNote } = this.props
        function noteType() {
            switch (note.type) {
                case 'NoteText':
                    return <i className="fas fa-font"></i>
                    break;
                case 'NoteImg':
                    return <i className="far fa-image"></i>
                    break;
                case 'NoteList':
                    return <i className="fas fa-list"></i>
                    break;
                case 'NoteAudio':
                    return <i className="fas fa-volume-up"></i>
                    break;
                case 'NoteVideo':
                    return <i className="fab fa-youtube"></i>
                    break;
            }
        }
        return (
            <div className="note-footer flex">
                {noteType()}
                <div className="note-btns">
                    <input type="radio" id="pin" name="note-btn" value="pin" />
                    <label htmlFor="pin" ><i className="fas fa-thumbtack"></i></label>
                    <input type="radio" id="edit" name="note-btn" value="edit" />
                    <label htmlFor="edit" ><i className="fas fa-palette"></i></label>
                    <input type="radio" id="note-clone" name="note-btn" value="note-clone" />
                    <label htmlFor="note-clone" ><i className="fas fa-clone"></i></label>
                    <input type="radio" id="note-delete" name="note-btn" value="note-delete" />
                    <label htmlFor="note-delete" ><i className="fas fa-trash-alt" onClick={(ev) => { onDeleteNote(ev, note.id) }} ></i></label>
                </div>
            </div>
        )
    }
}


