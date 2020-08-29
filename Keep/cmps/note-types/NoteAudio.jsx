
export class NoteAudio extends React.Component {
    render() {
        const { note } = this.props
        return (
            <audio controls src={note.info.url} type="audio/mpeg" />
        )
    }
}
