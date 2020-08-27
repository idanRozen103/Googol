const { withRouter } = ReactRouterDOM

import {mailService} from '../mail-services/mailService.js'
import { MailModal } from "./MailModal.jsx";

class _MailCompose extends React.Component {

    state = {
        newMail: { to: '', subject: '', body: '' }
    }

    onSendMail = (ev) => {
        ev.preventDefault()
        mailService.addMail(this.state.newMail)
        this.props.history.push('/mail/inbox')
    }

    onInputChange = (ev) => {
        this.setState({ newMail: { ...this.state.newMail, [ev.target.name]: ev.target.value } })
    }



    render() {
        return (
            <div>
                <MailModal>
                    <form type="submit" className="compose-mail-form flex column" action="">
                        <section className="new-mail-header flex">New Mail</section>
                        <input className="to-input" name="to" type="email" placeholder="To:" onChange={this.onInputChange} />
                        <input className="subject-input" name="subject" type="text" placeholder="Subject:" onChange={this.onInputChange} />
                        <textarea className="compose-mail-body" name="body" id="" cols="20" rows="18" maxLength="" onChange={this.onInputChange}></textarea>
                        <button className="send-mail-btn" onClick={this.onSendMail}>Send</button>
                    </form>
                </MailModal>

            </div>
        )
    }
}

export const MailCompose = withRouter(_MailCompose)