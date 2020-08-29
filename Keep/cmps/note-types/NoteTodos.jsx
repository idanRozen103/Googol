
export class NoteTodos extends React.Component {
    render() {
        const { note } = this.props
        return (
            <React.Fragment>
                <h3>{note.info.title}</h3>
                <ul>
                    {note.info.todos.map((todo, idx) => <li key={idx}><input type="checkbox"  />{todo}</li>
                    )}
                </ul>
            </React.Fragment>)
    }
}
