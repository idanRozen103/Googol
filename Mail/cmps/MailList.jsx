const Router = ReactRouterDOM.HashRouter
const { NavLink, Route, Switch, withRouter } = ReactRouterDOM

import { MailInbox } from './MailInbox.jsx'
import { MailStarred } from './MailStarred.jsx'


export class MailList extends React.Component {


    render() {



        return (
            // <NavLink to="mail/inbox"></NavLink>
            <Router>
                <Switch>

                    <Route path="/mail/inbox">
                        <MailInbox mails={this.props.mails} onDeleteMail={this.props.onDeleteMail} onMarkRead={this.props.onMarkRead} />
                    </Route>
                    <Route path="/mail/starred">
                        <MailStarred mails={this.props.mails} onDeleteMail={this.props.onDeleteMail} onMarkRead={this.props.onMarkRead} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
