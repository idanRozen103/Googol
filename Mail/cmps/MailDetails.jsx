const { NavLink, withRouter } = ReactRouterDOM
import { mailService } from '../mail-services/mailService.js'



class _MailDetails extends React.Component {

    state = {
        mail: {}
    }

    componentDidMount() {
        const mailId = this.props.location.pathname.split('/')[2]
        console.log("componentDidMount -> mailId", mailId)
        mailService.getById(mailId)
            .then((mail) => {
                console.log("componentDidMount -> mail", mail)
                this.setState({ mail })
            })


    }

    render() {
        if (!this.state.mail) return <div>Loading....</div>
        const { mail } = this.state
        return (
            <div className="mail-details">
                <h1>{mail.subject}</h1>
                <section className="mail-details-header">
                    <div className="mail-name-details">
                        <span className="bold">{mail.name}</span>
                        <span>{`< ${mail.name}@mail.com >`}</span>
                    </div>
                    <div className="mail-details-time">
                        <span>{new Date(mail.sentAt).toDateString()}</span>
                    </div>

                </section>
                <p className="mail-details-body">{mail.body}</p>

            </div>
        )
    }
}

export const MailDetails = withRouter(_MailDetails)