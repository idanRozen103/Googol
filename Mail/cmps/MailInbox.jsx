import { MailPreview } from "./MailPreview.jsx";


export class MailInbox extends React.Component {
    render() {
        console.log(this.props);
        return (
            <ul className="mail-list flex column">
                {this.props.mails.map((mail) =>
                    <li key={mail.id} className="mail-li">
                        <MailPreview mail={mail} isRead={mail.isRead} onDeleteMail={this.props.onDeleteMail} onMarkRead={this.props.onMarkRead} />
                    </li>
                )}
            </ul>
        )
    }
}
