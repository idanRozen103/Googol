
// import eventBusService from "../services/eventBusService";
import {eventBus} from '../../services/eventBusService.js'

const { withRouter } = ReactRouterDOM

class _MailFilter extends React.Component {

    closeEventBus;

    state = {
        filterText: '',
        filterOption: ''

    }

    componentDidMount() {
        this.loadFilters()
        this.closeEventBus = eventBus.on('routeChange', () => {
            this.setState({filterText: '', filterOption: 'all'})
        })
    }

    componentWillUnmount () {
        this.closeEventBus()
    }
    
    
    loadFilters() {
        const searchParams= new URLSearchParams(this.props.location.search)
        
        const filterText = searchParams.get('filterText') || ''
        const filterOption = searchParams.get('filterOption') || ''
        this.setState({ filterText, filterOption}, () => {
            this.props.onFilter(filterText, 'filterText')
            this.props.onFilter(filterOption, 'filterOption')
        })
    }

    clearFilters = () => {
        this.setState({ filterText: '', filterOption: 'all' })
    }

    

    handleChange = (val, filterBy) => {
        this.setState({ [filterBy]: val }, () => this.props.onFilter(this.state[filterBy], filterBy))
        
    }


    render() {
        // const { placeholder, isPrice, options } = this.props
        return (
            <div className="filter-nav">
                <input value={this.state.filterText} onChange={(ev) => {
                    this.handleChange(ev.target.value, 'filterText')
                }} type="text" name="text"  placeholder='search' />
                <select value={this.state.filterOption} onChange={(ev) => {
                    this.handleChange(ev.target.value, 'filterOption')
                }} name="option" id="">
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="read">read</option>
                </select>
            </div>
        )
    }
}

export const MailFilter = withRouter(_MailFilter)