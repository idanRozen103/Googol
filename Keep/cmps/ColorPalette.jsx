
export class ColorPalette extends React.Component {


    onChangeColor = (colorValue, ev) => {
        ev.stopPropagation()
        const { note, onChangeNoteBGC, closeColors } = this.props;
        note.style = { backgroundColor: colorValue }
        closeColors()
        onChangeNoteBGC(note.id, colorValue)
    }


    render() {
        return (
            <div className="colors-container flex">
                <button onClick={(ev) => this.onChangeColor('#fff475', ev)} style={{ backgroundColor: "#fff475" }}></button>
                <button onClick={(ev) => this.onChangeColor('#ffc107', ev)} style={{ backgroundColor: "#ffc107" }}></button>
                <button onClick={(ev) => this.onChangeColor('#8bccff', ev)} style={{ backgroundColor: "#8bccff" }}></button>
                <button onClick={(ev) => this.onChangeColor('#d7aefb', ev)} style={{ backgroundColor: "#d7aefb" }}></button>
                <button onClick={(ev) => this.onChangeColor('#c4fd82', ev)} style={{ backgroundColor: "#c4fd82" }}></button>
                <button onClick={(ev) => this.onChangeColor('#f28b82', ev)} style={{ backgroundColor: "#f28b82" }}></button>
                <button onClick={(ev) => this.onChangeColor('#fdcfe8', ev)} style={{ backgroundColor: "#fdcfe8" }}></button>
                <button onClick={(ev) => this.onChangeColor('#cbf0f8', ev)} style={{ backgroundColor: "#cbf0f8" }}></button>
                <button onClick={(ev) => this.onChangeColor('#e8eaed', ev)} style={{ backgroundColor: "#e8eaed" }}></button>
                <button onClick={(ev) => this.onChangeColor('#a7ffeb', ev)} style={{ backgroundColor: "#a7ffeb" }}></button>
                <button onClick={(ev) => this.onChangeColor('#d9c1a5', ev)} style={{ backgroundColor: "#d9c1a5" }}></button>
                <button onClick={(ev) => this.onChangeColor('#fff', ev)} style={{ backgroundColor: "#fff" }}></button>
            </div>
        )
    }
}







