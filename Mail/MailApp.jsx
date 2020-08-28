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


    clearFilters = () => {
        this.setState({ filterText: '', filterOption: 'all' })
    }


    setFilter = (val, filterBy) => {
        const { location } = this.props

        val = +val || val
        const pathName = location.pathname
        let urlSearch = this.getUrlSearchStr(location, val, filterBy)
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

    // setMailsForDisplay() {
    //     const inMails = this.state.inMails.filter(mail => {
    //         const isSubInclude = mail.subject.toLowerCase().includes(filterText.toLowerCase())
    //         return isSubInclude
    //     })

    //     // const sentMails = this.state.sentMails.filter(book => book.title.toLowerCase().includes(this.state.filterByTxt.toLowerCase()))
    //     this.setState({inMails})
    // }

    getFilteredMails = (mails) => {
        const filterText = new URLSearchParams(this.props.location.search).get('filterText') || ''
        const filterOption = new URLSearchParams(this.props.location.search).get('filterOption') || ''
        const txtFilterMails = mails.filter((mail) => {
            return mail.subject.toLowerCase().includes(filterText.toLowerCase())
                || mail.body.toLowerCase().includes(filterText.toLowerCase())
                || mail.name.toLowerCase().includes(filterText.toLowerCase())
        })

        const txtOptionFilterMails = txtFilterMails.filter(mail => {
            if (!filterOption || filterOption === 'all') return true
            else if (filterOption === 'read' && mail.isRead) return true
            else if (filterOption === 'unread' && !mail.isRead) return true
            else return false
        })
        return txtOptionFilterMails
    }



    loadMails() {
        mailService.query()
            .then(({ inMails, sentMails }) => {
                console.log("loadMails -> sentMails", sentMails)
                this.setState({ inMails, sentMails })
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
        const inMails = this.getFilteredMails(this.state.inMails)
        const sentMails = this.getFilteredMails(this.state.sentMails)
        if (!inMails) return <div>Loading...</div>
        return (
            <React.Fragment>

                <div className="mail-search">
                    <MailFilter location={this.props.location} onFilter={this.setFilter} />
                </div>
                <div className="mail-container container flex">
                    <nav className="mail-side-nav flex column">
                        <NavLink className="compose-mail" to="/mail/compose/:">Compose</NavLink>
                        <NavLink onClick={this.clearFilters} className="mail-link" to="/mail/inbox/">Inbox</NavLink>
                        <NavLink className="mail-link" to="/mail/starred">Starred</NavLink>
                        <NavLink className="mail-link" to="/mail/sentMails">Sent Mails</NavLink>

                        <div className="mail-link">Drafts</div>
                    </nav>

                    <MailList clearFilters={this.clearFilters} sentMails={sentMails} mails={inMails} onStarredMail={this.onStarredMail} onDeleteMail={this.onDeleteMail} onMarkRead={this.onMarkRead} />
                    <Route component={MailCompose} path="/mail/compose/:id" />

                </div>
            </React.Fragment>
        )
    }
}

export const MailApp = withRouter(_MailApp)