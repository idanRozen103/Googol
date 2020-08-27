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
        console.log(ev.target.value);
        this.setState({
            noteToUpdate: {
                ...this.state.noteToUpdate,
                info: { ...this.state.noteToUpdate.info, txt: ev.target.value }
            }
        })
    }



    render() {
        const { note, closeModal } = this.props
        if (!this.state.noteToUpdate.info) return 'loading note'

        return (
            <div className='modal-wrapper' onClick={() => closeModal(note.id, this.state.noteToUpdate.info.txt)} >
                <div className="modal-content" onClick={(ev) => ev.stopPropagation()}>
                    <button onClick={() => closeModal(note.id, this.state.noteToUpdate.info.txt)}>X</button>
                    <React.Fragment>
                        <input ref={this.elInput} type="text" value={this.state.noteToUpdate.info.txt} onChange={this.onInputChange} />
                        {/* <div className="note-footer flex"> */}
                        {/* {noteType()} */}
                        {/* <div className="note-btns">
                                <input type="radio" id="pin" name="note-btn" value="pin" />
                                <label htmlFor="pin" ><i className="fas fa-thumbtack"></i></label>
                                <input type="radio" id="edit" name="note-btn" value="edit" />
                                <label htmlFor="edit" ><i className="fas fa-palette"></i></label>
                                <input type="radio" id="note-clone" name="note-btn" value="note-clone" />
                                <label htmlFor="note-clone" ><i className="fas fa-clone"></i></label>
                                <input type="radio" id="note-delete" name="note-btn" value="note-delete" />
                                <label htmlFor="note-delete" ><i className="fas fa-trash-alt" onClick={() => { onDeleteNote(note.id) }} ></i></label>
                            </div>
                        </div> */}

                    </React.Fragment>
                </div>
            </div >
        )
    }
}
