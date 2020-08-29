
export class NoteVideo extends React.Component {
    render() {
        const { note } = this.props

        return (
            <div>
                <h3>{note.info.title}</h3>
                <iframe width="380" height="240" controls allowFullScreen src={note.info.url} frameBorder="0" />

            </div>
        )
    }
}



