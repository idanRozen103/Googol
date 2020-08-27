import { MailPreview } from "./MailPreview.jsx";


export class MailStarred extends React.Component {  

    getStarStyle(isStarred) {
        const display = (isStarred)?'':'none'
        return {'display': display}
    }

    render() {
        return (
            <ul className="mail-list flex column">
                {this.props.mails.map((mail) =>
                    <li style={this.getStarStyle(mail.isStarred)} key={mail.id} className="mail-li">
                        {mail.isStarred && <MailPreview mail={mail} isRead={mail.isRead} onDeleteMail={this.props.onDeleteMail} onMarkRead={this.props.onMarkRead} onStarredMail={this.props.onStarredMail} />}
                    </li>
                )}
            </ul>
        )
    }
}
