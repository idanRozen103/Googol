
// import eventBusService from "../services/eventBusService";

export class Search extends React.Component {


    handleChange = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(ev.target.value)
    }


    render() {
        const { placeholder, isPrice, options } = this.props
        return (
            <div>
                <input type="text" name="text" onChange={this.handleChange} placeholder={placeholder} />
                {isPrice && <input type="number" name="price" placeholder="'Enter price" />}
                {options.length && <select name="" id="">
                    {options}
                </select>}
            </div>
        )
    }
}
