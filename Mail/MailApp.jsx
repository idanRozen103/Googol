const { NavLink, Route, Switch } = ReactRouterDOM

import { mailService } from './mail-services/mailService.js'
import { MailList } from './cmps/MailList.jsx'
import { MailCompose } from './cmps/MailCompose.jsx'





export class MailApp extends React.Component {

    state = {
        mails: []
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails() {
        mailService.query()
            .then(mails => {
                this.setState({ mails })
            })
    }

    onDeleteMail = (mail) => {
        mailService.deleteMail(mail)
        this.loadMails()
        
    }


    render() {
        const { mails } = this.state
        if (!mails.length) return <div>Loading...</div>
        return (

            <div className="mail-container container flex">
                <nav className="mail-side-nav flex column">
                    <NavLink to="/mail/compose">Compose</NavLink>
                    <div className="mail-link">Inbox</div>
                    <div className="mail-link">Starred</div>
                    <div className="mail-link">Sent Mails</div>
                    <div className="mail-link">Drafts</div>
                </nav>
                <MailList mails={mails} onDeleteMail={this.onDeleteMail}/>
                <Route component={MailCompose} path="/mail/compose"/>

            </div>
        )
    }
}
