export class NoteTodos extends React.Component {

    render() {
        const { note, onTodoToggle } = this.props
        return (
            <React.Fragment>
                <h3>{note.info.title}</h3>
                <ul>
                    {note.info.todos.map(todo => <li key={todo.id} className={todo.isDone ? 'checked' : ''} onClick={(ev) => { onTodoToggle(this, ev, note.id, todo.id) }}><input type="checkbox"  onChange={() => console.log('')} checked={todo.isDone ? true : false} />{todo.text}
                    </li>
                    )}
                    <br />
                    <small>Created At: {note.info.timeCreated.substring(0, note.info.timeCreated.length - 32)}</small>
                </ul>
            </React.Fragment >)
    }
}
