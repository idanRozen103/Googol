const { NavLink, withRouter, Link } = ReactRouterDOM

import { mailService } from '../mail-services/mailService.js'

class _MailPreview extends React.Component {

    // state =  {
    //     isRead: this.props.isRead
    // }




    getBodyStyle() {
        const fontWeight = (!this.props.mail.isRead) ? '1000' : '330'
        const fontSize = (!this.props.mail.isRead) ? '1.01rem' : '1rem'
        const color = (!this.props.mail.isRead) ? 'black' : 'inherit'
        const opacity = (!this.props.mail.isRead) ? '1' : '0.8'
        const backgroundColor = (!this.props.mail.isRead) ? '#E7ECF7' : '#F0F5FF'
        return { 'fontWeight': fontWeight, 'opacity': opacity, 'color': color, 'fontSize': fontSize, 'backgroundColor': backgroundColor }

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

                <Link to={`/mail/${mail.id}`} className="mail-prev-navlink">


                    <div className="mail-prev-name">
                        <span className="name-span">{mail.name}</span>
                    </div>

                    <div className="mail-prev-text">
                        <span>{mail.subject}</span>
                    -<span className="mail-preb-body">{mail.body}</span>
                    </div>


                </Link>
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