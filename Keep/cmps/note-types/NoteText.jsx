
export class NoteText extends React.Component {

    render() {
        const { note } = this.props
        return (
            <div>
                <h3>{note.info.title}</h3>
                <p>{note.info.text}</p>
            </div>
        )
    }
}
