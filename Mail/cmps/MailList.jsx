import { MailPreview } from './MailPreview.jsx'


export class MailList extends React.Component {

    render() {
        const temp = ['hey', 'hey', 'hey', 'hey', 'jd', 'jkd', 'hey']
        return (
            <ul className="mail-list flex column">
                {this.props.mails.map((mail) => 
                    <li key={mail.id} className="mail-li">
                        <MailPreview mail={mail} onDeleteMail={this.props.onDeleteMail}/>
                    </li>
                )}
            </ul>
        )
    }
}
