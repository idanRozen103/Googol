const { NavLink, Route, Switch, withRouter } = ReactRouterDOM

import { mailService } from './mail-services/mailService.js'
import { MailList } from './cmps/MailList.jsx'
import { MailCompose } from './cmps/MailCompose.jsx'
import { MailFilter } from './cmps/MailFilter.jsx'





class _MailApp extends React.Component {

    state = {
        inMails: [],
        sentMails: [],
        filterText: '',
        filterOption: ''
    }

    componentDidMount() {
        this.loadMails()
        
    }


    setFilter = (val, filterBy) => {
        const { location } = this.props

        val = +val || val
        const pathName = location.pathname
        let urlSearch = this.getUrlSearchStr(location, val, filterBy)
        this.setState({ [filterBy]: val }, console.log('state', this.state))
        this.props.history.push(`${pathName}?${urlSearch}`)
    }

    getUrlSearchStr = (location, val, filterBy) => {
        const urlSearch = new URLSearchParams(location.search)
        urlSearch.append(filterBy, val)
        let obj = {}
        urlSearch.forEach((val, filterBy) => {
            obj[filterBy] = val
        })
        let urlSearchStr = ''
        for (var key in obj) {
            urlSearchStr += `${key}=${obj[key]}&`
        }
        return urlSearchStr
    }

    setMailsForDisplay() {
        const inMails = this.state.inMails.filter(mail => {
            console.log(mail.subject);
            // console.log(filterText);
            const isSubInclude = mail.subject.toLowerCase().includes(filterText.toLowerCase())
            return isSubInclude
        })
        
        // const sentMails = this.state.sentMails.filter(book => book.title.toLowerCase().includes(this.state.filterByTxt.toLowerCase()))
        this.setState({inMails})
    }
  
    getFilteredMails = () => {
        const filterText = new URLSearchParams(this.props.location.search).get('filterText') || ''
        const filterOption = new URLSearchParams(this.props.location.search).get('filterOption') || ''
        const inMails = this.state.inMails.filter(mail => mail.subject.toLowerCase().includes(filterText.toLowerCase()))
        return inMails
    }



    loadMails() {
        mailService.query()
            .then(({ inMails, sentMails }) => {
                
                this.setState({ inMails, sentMails }, this.setMailsForDisplay())
            })
    }

    onDeleteMail = (mail) => {
        mailService.deleteMail(mail)
        this.loadMails()
    }

    onMarkRead = (mail) => {
        mailService.markRead(mail)
            .then(() => {
                this.loadMails()
            })
    }

    onStarredMail = (ev, mail) => {
        ev.stopPropagation()
        mailService.starMail(mail)
            .then(() => {
                this.loadMails()
            })
    }

    render() {
        const  inMails  = this.getFilteredMails()
        if (!inMails ) return <div>Loading...</div>
        return (
            <React.Fragment>

                <div className="mail-search">
                    <MailFilter location={this.props.location} onFilter={this.setFilter} />
                </div>
                <div className="mail-container container flex">
                    <nav className="mail-side-nav flex column">
                        <NavLink className="compose-mail" to="/mail/compose/:">Compose</NavLink>
                        <NavLink className="mail-link" to="/mail/inbox/">Inbox</NavLink>
                        <NavLink className="mail-link" to="/mail/starred">Starred</NavLink>
                        <NavLink className="mail-link" to="/mail/sentMails">Sent Mails</NavLink>

                        <div className="mail-link">Drafts</div>
                    </nav>

                    <MailList sentMails={this.state.sentMails} mails={inMails} onStarredMail={this.onStarredMail} onDeleteMail={this.onDeleteMail} onMarkRead={this.onMarkRead} />
                    <Route component={MailCompose} path="/mail/compose/:id" />

                </div>
            </React.Fragment>
        )
    }
}

export const MailApp = withRouter(_MailApp)