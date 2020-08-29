const { Link, withRouter } = ReactRouterDOM
import { mailService } from '../mail-services/mailService.js'



class _MailDetails extends React.Component {

    state = {
        mail: {}
    }

    componentDidMount() {
        const mailId = this.props.location.pathname.split('/')[2]
        mailService.getById(mailId)
            .then((mail) => {
                this.setState({ mail })
                if (mail) mailService.markUnRead(mail)

            })
    }

    getNameFirstLetter(name) {
        console.log(name);
        if (!name) return
        return name[0]
    }

    

    render() {
        if (!this.state.mail) return <div>Loading....</div>
        const { mail } = this.state
        return (
            <div className="mail-details">
                <h1>{mail.subject}</h1>
                <section className="mail-details-header">
                    <div className="mail-name-details">
                        <div style={{ 'backgroundColor': mail.color }} className="first-letter"><span>{this.getNameFirstLetter(mail.name)}</span></div>
                        <span className="bold">{mail.name}</span>
                        <span className="mail-addres">{`< ${mail.name}@mail.com >`}</span>
                    </div>
                    <div className="mail-details-time">
                        <div onClick={(ev) => {
                            this.props.onStarredMail(ev, mail)
                        }} className="star-btn">
                            {!mail.isStarred && <i className="mail-icon far fa-star"></i>}
                            {mail.isStarred && <i className="mail-icon fas fa-star"></i>}
                        </div>
                        <Link to={`/mail/compose/${mail.id}`} className="reply-btn"><i className="fas fa-reply"></i></Link>

                        <span>{new Date(mail.sentAt).toDateString()}</span>
                    </div>

                </section>
                <p className="mail-details-body">{mail.body}</p>
                {mail.imgUrl && <img className="mail-img" src={mail.imgUrl} />}

            </div>
        )
    }
}

export const MailDetails = withRouter(_MailDetails)