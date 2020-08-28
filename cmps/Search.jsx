
// import eventBusService from "../services/eventBusService";

export class Search extends React.Component {


    handleChange = (ev) => {
        ev.preventDefault();
        
    }


    render() {
        // const { placeholder, isPrice, options } = this.props
        return (
            <div>
                <input type="text" name="text"  placeholder='search' />
                {/* {isPrice && <input type="number" name="price" placeholder="'Enter price" />}
                {options.length && <select name="" id="">
                    {options}
                </select>} */}
            </div>
        )
    }
}
