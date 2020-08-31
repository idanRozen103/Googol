export class NoteTodos extends React.Component {

    render() {
        const { note, onTodoToggle, onTodoRemove } = this.props
        return (
            <React.Fragment>
                <h3>{note.info.title}</h3>
                <ul>
                    {note.info.todos.map(todo => <li key={todo.id} className={`todo flex ${todo.isDone ? 'checked' : ''}`} ><div><input type="checkbox" onChange={() => console.log('')} checked={todo.isDone ? true : false} onClick={(ev) => { ev.stopPropagation(); onTodoToggle(this, ev, note.id, todo.id) }}  /><p className="todo-content" >{todo.text}</p></div>
                        <button className="remove-todo" onClick={(ev) => {
                            ev.stopPropagation();
                            onTodoRemove(note.id, todo.id);
                        }}>x</button>
                    </li>
                    )}
                    <br />
                    <small>Created At: {note.info.timeCreated.substring(0, note.info.timeCreated.length - 32)}</small>
                </ul>
            </React.Fragment >)
    }
}
