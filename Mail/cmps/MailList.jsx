const Router = ReactRouterDOM.HashRouter
const { NavLink, Route, Switch, withRouter } = ReactRouterDOM

import { MailInbox } from './MailInbox.jsx'
import { MailStarred } from './MailStarred.jsx'
import { MailDetails } from './MailDetails.jsx'
import { SentMails } from './SentMails.jsx'


export class MailList extends React.Component {


    render() {

        return (
            // <NavLink to="mail/inbox"></NavLink>
            <Router>
                <Switch>
                    <Route path="/mail/inbox/">
                        <MailInbox clearFilters={this.props.clearFilters} onStarredMail={this.props.onStarredMail} mails={this.props.mails} onDeleteMail={this.props.onDeleteMail} onMarkRead={this.props.onMarkRead} />
                    </Route>
                    <Route path="/mail/sentMails">
                        <SentMails onStarredMail={this.props.onStarredMail} sentMails={this.props.sentMails} onDeleteMail={this.props.onDeleteMail} onMarkRead={this.props.onMarkRead} />
                    </Route>
                    <Route path="/mail/starred">
                        <MailStarred onStarredMail={this.props.onStarredMail} mails={this.props.mails} onDeleteMail={this.props.onDeleteMail} onMarkRead={this.props.onMarkRead} />
                    </Route>
                    <Route path="/mail/:id">
                        <MailDetails/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
