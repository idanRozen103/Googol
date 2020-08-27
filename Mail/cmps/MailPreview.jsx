import { mailService } from '../mail-services/mailService.js'

export class MailPreview extends React.Component {

    state =  {
        isRead: this.props.isRead
    }


    

    getBodyStyle() {
        let fontWeight = (!this.state.isRead) ? '800' : ''
        return {'fontWeight': fontWeight} 
        // return fontWeight       
    }

    // componentDidUpdate() {
    //     this.setState({isRead: !this.state.isRead})
    // }
    

    // do() {
    //     this.setState({isRead: true})
    // }
    

    render() {
        const { mail } = this.props

        return (
            <div style={this.getBodyStyle()} className={`mail-prev flex`}>
                <div className="mail-prev-name">
                    <span>{mail.name}</span>
                </div>

                <div className="mail-prev-text">
                    <span>{mail.subject}</span>
                    -<span className="mail-preb-body">{mail.body}</span>
                </div>

                <div className="mail-prev-time">
                    <span>{mailService.getFormatTime(mail.sentAt)}</span>
                </div>

                <section className="mail-edit-btns">
                    <button onClick={() => {
                        this.props.onMarkRead(mail)

                    }}><i className="fas fa-envelope-open-text"></i></button>
                    <button onClick={() => {
                        this.props.onDeleteMail(mail)
                    }}><i className="fas fa-trash-alt"></i></button>
                </section>


            </div>
        )
    }
}
