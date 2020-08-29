// import { ReactPlayer } from react - player

export class NoteVideo extends React.Component {
    render() {
        const { note } = this.props

        return (
            <div>
                <h3>{note.info.title}</h3>
                <iframe width="380" height="240" controls allowFullScreen src={note.info.url} frameBorder="0" />
                {/* <iframe width="1381" height="517" src="https://www.youtube.com/embed/MYJldv7ZhOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            </div>
        )
    }
}



