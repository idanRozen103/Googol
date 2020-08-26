import {mailService} from '../mail-services/mailService.js'

export class MailPreview extends React.Component {

    getBodyStyle() {
        const bodyStyle = {}
        bodyStyle['fontWeight'] = (!this.props.mail.isRead)?'bold':'regular'
        return bodyStyle 
    }

    render() {
        const {mail} = this.props
        
        return (
            <div  style={this.getBodyStyle()} className="mail-prev flex">
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
                        this.props.onDeleteMail(mail)
                    }}>X</button>
                </section>
                

            </div>
        )
    }
}
