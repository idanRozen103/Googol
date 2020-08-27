const { NavLink, Route, Switch , withRouter} = ReactRouterDOM

import { mailService } from './mail-services/mailService.js'
import { MailList } from './cmps/MailList.jsx'
import { MailCompose } from './cmps/MailCompose.jsx'





class _MailApp extends React.Component {

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

    onMarkRead = (mail) => {
        mailService.markRead(mail)
            .then(()=>{
                this.loadMails()
            })         
    }

    onStarredMail = (mail) => {
        mailService.starMail(mail)
            .then(()=>{
                this.loadMails()
            })    
    }

    render() {
        const { mails } = this.state
        // if (!mails.length) return <div>Loading...</div>
        return (
        
            <div className="mail-container container flex">
                <nav className="mail-side-nav flex column">
                    <NavLink className="compose-mail" to="/mail/compose">Compose</NavLink>
                    <NavLink className="mail-link" to="/mail/inbox">Inbox</NavLink>
                    <NavLink className="mail-link" to="/mail/starred">Starred</NavLink>
                    <div className="mail-link">Sent Mails</div>
                    <div className="mail-link">Drafts</div>
                </nav>
                
                <MailList mails={this.state.mails} onStarredMail={this.onStarredMail} onDeleteMail={this.onDeleteMail} onMarkRead={this.onMarkRead}/>
                <Route component={MailCompose} path="/mail/compose"/>

            </div>
        )
    }
}

export const MailApp = withRouter(_MailApp)