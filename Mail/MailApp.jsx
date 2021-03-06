const { NavLink, Route, Switch, withRouter } = ReactRouterDOM

import { mailService } from './mail-services/mailService.js'
import { MailList } from './cmps/MailList.jsx'
import { MailCompose } from './cmps/MailCompose.jsx'
import { MailFilter } from './cmps/MailFilter.jsx'
import { eventBus } from '../services/eventBusService.js'



class _MailApp extends React.Component {

    state = {
        inMails: [],
        sentMails: [],
        filterText: '',
        filterOption: '',
        sortBy: '',
        unReadCount: 0,
        openMenuClass: '',
        openScreen: ''
    }

    componentDidMount() {
        mailService.query()
            .then(({ inMails, sentMails }) => {
                inMails = this.sortByUnread(inMails)
                sentMails = this.sortByUnread(sentMails)
                this.setState({ inMails, sentMails })
            })
    }

    clearFilters = () => {
        this.setState({ filterText: '', filterOption: 'all' })
        eventBus.emit('routeChange')
    }

    getUnreadPrecent = () => {
        var countUnread = 0
        const { inMails } = this.state
        for (let i = 0; i < inMails.length; i++) {
            const mail = inMails[i]
            countUnread += (!mail.isRead) ? 1 : 0
        }
        let res = ((countUnread / inMails.length) * 100).toFixed(0) + '%'
        return res
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

    sortByUnread(mails) {
        mails.sort((mail1, mail2) => {
            if (!mail1.isRead) return -1
            else return 1
        })
        return mails
    }

    loadMails() {
        mailService.query()
            .then(({ inMails, sentMails }) => {
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

    onSortMail = (ev) => {
        this.setState({ sortBy: ev.target.value })
    }

    getSortedMails = (mails) => {
        const { sortBy } = this.state
        if (sortBy === 'title') {
            mails.sort((mail1, mail2) => {
                return mail1.subject.localeCompare(mail2.subject)
            })
        } else if (sortBy === 'date') {
            mails.sort((mail1, mail2) => {
                return mail2.sentAt - mail1.sentAt
            })

        } else if (sortBy === "unread") {
            this.sortByUnread(mails)
        }
        return mails
    }

    toggleMenu = () => {
        var openMenuClass = ''
        var openScreen = ''
        if (!this.state.openMenuClass) {
            openMenuClass = 'menu-open'
            openScreen = 'open-screen'
        }

        this.setState({ openMenuClass, openScreen })
    }

    render() {
        const inMails = this.getSortedMails(this.getFilteredMails(this.state.inMails))
        const sentMails = this.getSortedMails(this.getFilteredMails(this.state.sentMails))
        if (!inMails) return <div>Loading...</div>
        return (
            <div className="main-modal-header">
                <div onClick={this.toggleMenu} className={`mail-screen ${this.state.openScreen}`}></div>
                <div className="mail-search">
                    <button onClick={this.toggleMenu} className="hamburger">☰</button>

                    <MailFilter location={this.props.location} onFilter={this.setFilter} />
                </div>
                <div className="sort-mail-container flex _container">
                    <div className="flex column">
                        <select defaultValue="" onChange={this.onSortMail} required className="sort-mail" name="" id="sort-mail">
                            <option value="" disabled hidden >Sort By</option>
                            <option value="unread">Unread</option>
                            <option value="title">Title</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                    {/* <button className="sort-mail-title">Sort By title</button> */}
                </div>
                <div className="mail-container _container flex">
                    <nav className={`mail-side-nav flex column ${this.state.openMenuClass}`}>
                        <NavLink onClick={this.clearFilters} className="compose-mail" to="/mail/compose/:">Compose</NavLink>
                        <NavLink onClick={this.clearFilters} className="mail-link" to="/mail/inbox/"><i className="fas fa-inbox"></i> Inbox</NavLink>
                        <NavLink onClick={this.clearFilters} className="mail-link" to="/mail/starred"><i className="fas fa-star"></i> Starred</NavLink>
                        <NavLink onClick={this.clearFilters} className="mail-link" to="/mail/sentMails"><i className="fas fa-share-square"></i> Sent Mails</NavLink>

                        {/* <div className="mail-link">Drafts</div> */}

                        <div className="prog-bar-container">
                            <label htmlFor="">Unread Mails</label>
                            <div className="prog-bar-box">
                                <div className="prog-bar" style={{ 'width': `${this.getUnreadPrecent()}` }}>{this.getUnreadPrecent()}</div>
                            </div>
                        </div>

                    </nav>

                    <MailList clearFilters={this.clearFilters} sentMails={sentMails} mails={inMails} onStarredMail={this.onStarredMail} onDeleteMail={this.onDeleteMail} onMarkRead={this.onMarkRead} />
                    <Route component={MailCompose} path="/mail/compose/:id" />
                </div>
            </div>

        )
    }
}

export const MailApp = withRouter(_MailApp)