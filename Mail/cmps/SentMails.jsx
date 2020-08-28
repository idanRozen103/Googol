import { MailPreview } from "./MailPreview.jsx";


export class SentMails extends React.Component {
    render() {
        return (
            <ul className="mail-list flex column">
                {this.props.sentMails.map((mail) =>
                    <li key={mail.id} className="mail-li">
                        <MailPreview mail={mail} isRead={mail.isRead} onDeleteMail={this.props.onDeleteMail} onMarkRead={this.props.onMarkRead} onStarredMail={this.props.onStarredMail} />
                    </li>
                )}
            </ul>
        )
    }
}
