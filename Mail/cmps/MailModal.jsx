const { withRouter } = ReactRouterDOM


class _MailModal extends React.Component {
    state = {
        isShown: true
    }
    closeModal = (ev) => {
        ev.preventDefault()
        this.props.history.push('/mail/inbox')
    }
    render() {
        const { isShown } = this.state
        const { children } = this.props
        return (
            <div className={ `modal-wrapper ${isShown ? '' : 'hide'}` } onClick={ this.closeModal } >
                <div className="modal-content modal-mail" onClick={ (ev) => ev.stopPropagation() }>
                    { children }
                    <button className="close-mail-modal" onClick={ this.closeModal }>X</button>
                </div>
            </div >
        )
    }
}

export const MailModal = withRouter(_MailModal)