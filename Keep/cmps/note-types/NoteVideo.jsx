
export class NoteVideo extends React.Component {
    render() {
        const { note } = this.props

        return (
            <div>
                <h3>{note.info.title}</h3>
                <iframe width="380px" height="240px" controls allowFullScreen src={note.info.url} frameBorder="2" />

            </div>
        )
    }
}



