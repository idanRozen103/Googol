import {eventBus} from '../services/eventBusService.js'

export class UserMsg extends React.Component {
    state = {
        isShown: false,
        msg: '',
        type: ''
    }
    unsubscribe;
    componentDidMount() {
        this.unsubscribe = eventBus.on('notify', (data) => {
            console.log(data);
            this.setState({ isShown: true, msg: data.msg, type: data.type })
            // setTimeout(() => this.setState({ isShown: false }), 3000)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const { isShown, msg, type } = this.state
        const _hidden = (isShown)?'':'hidden-msg'
        return (
            <div className={ `notification-box ${type} ${_hidden}` }  >
                { isShown && <span onClick={ () => this.setState({ isShown: false }) }>X</span> }
                { isShown && <h2> { msg }</h2> }
            </div>
        )
    }
}
