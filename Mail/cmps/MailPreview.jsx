const { NavLink, withRouter } = ReactRouterDOM

import { mailService } from '../mail-services/mailService.js'

class _MailPreview extends React.Component {

    // state =  {
    //     isRead: this.props.isRead
    // }




    getBodyStyle() {
        let fontWeight = (!this.props.mail.isRead) ? '800' : '250'
        return { 'fontWeight': fontWeight }

    }



    render() {
        const { mail } = this.props

        return (


            <div style={this.getBodyStyle()} className={`mail-prev flex`}>

                <div onClick={(ev) => {
                    this.props.onStarredMail(ev, mail)
                }} className="star-btn">
                    {!mail.isStarred && <i className="mail-icon far fa-star"></i>}
                    {mail.isStarred && <i className="mail-icon fas fa-star"></i>}
                </div>

                <NavLink to={`/mail/${mail.id}`} className="mail-prev-navlink">


                    <div className="mail-prev-name">
                        <span>{mail.name}</span>
                    </div>

                    <div className="mail-prev-text">
                        <span>{mail.subject}</span>
                    -<span className="mail-preb-body">{mail.body}</span>
                    </div>

                    
                </NavLink>
                <div className="mail-prev-time">
                        <span>{mailService.getFormatTime(mail.sentAt)}</span>
                    </div>
                <section className="mail-edit-btns">
                    <button onClick={() => {
                        this.props.onMarkRead(mail)
                    }}>
                        {!mail.isRead && <i className="mail-icon fas fa-envelope-open-text"></i>}
                        {mail.isRead && <i className="mail-icon fas fa-envelope"></i>}
                    </button>

                    <button onClick={() => {
                        this.props.onDeleteMail(mail)
                    }}><i className="mail-icon fas fa-trash-alt"></i></button>
                </section>


            </div>
        )
    }
}

export const MailPreview = withRouter(_MailPreview)