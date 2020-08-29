// import { ReactPlayer } from react - player

export class NoteVideo extends React.Component {
    render() {
        const { note } = this.props

        return (
            <div>
                <h3>{note.info.title}</h3>
                <video width="380" height="240" controls src={note.info.url} frameBorder="0"></video>
                {/* <video width="320" height="240" src="https://www.youtube.com/watch?v=_4kHxtiuML0" controls></video> */}
                {/* <video width="320" height="240" controls  >
                    <source src={note.info.url} />
                </video> */}
            </div>
        )
    }
}


// frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" 