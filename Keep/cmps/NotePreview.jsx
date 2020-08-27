
export class NotePreview extends React.Component {
    render() {
        return (
            <div className="note-preview flex column">
                {/* < textarew /> */}
                
                <h3>hello</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptates quod, in perferendis quis labore cum expedita veniam adipisci maxime fugit quasi nam laborum totam hic sit. Dignissimos, velit similique.</p>

                <div className="note-footer flex">
                        <i>note type</i>
                    <div className="note-btns">
                        <input type="radio" id="pin" name="note-btn" value="pin" />
                        <label htmlFor="pin" ><i className="fas fa-thumbtack"></i></label>
                        <input type="radio" id="edit" name="note-btn" value="edit" />
                        <label htmlFor="edit" ><i className="fas fa-palette"></i></label>
                        <input type="radio" id="note-clone" name="note-btn" value="note-clone" />
                        <label htmlFor="note-clone" ><i className="fas fa-clone"></i></label>
                        <input type="radio" id="note-delete" name="note-btn" value="note-delete" />
                        <label htmlFor="note-delete" ><i className="fas fa-trash-alt"></i></label>
                    </div>
                </div>
            </div>
        )
    }
}
