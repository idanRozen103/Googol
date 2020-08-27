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

    render() {
        const { mails } = this.state
        // if (!mails.length) return <div>Loading...</div>
        return (
        
            <div className="mail-container container flex">
                {console.log('render mailApp', mails)}
                <nav className="mail-side-nav flex column">
                    <NavLink className="compose-mail" to="/mail/compose">Compose</NavLink>
                    <div className="mail-link">Inbox</div>
                    <div className="mail-link">Starred</div>
                    <div className="mail-link">Sent Mails</div>
                    <div className="mail-link">Drafts</div>
                </nav>
                
                <MailList mails={this.state.mails} onDeleteMail={this.onDeleteMail} onMarkRead={this.onMarkRead}/>
                <Route component={MailCompose} path="/mail/compose"/>

            </div>
        )
    }
}

export const MailApp = withRouter(_MailApp)