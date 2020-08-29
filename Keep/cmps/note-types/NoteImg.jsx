
export class NoteImg extends React.Component {
    render() {
        const { note } = this.props
        return (
            <React.Fragment>
                <h3>{note.info.title}</h3>
                <img width="380" height="240" src={note.info.url} />
            </React.Fragment>
        )
    }
}
