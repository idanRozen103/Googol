import { utils } from '../mail-services/mailUtils.js'

export const mailService = {
    query,
    getFormatTime,
    addMail,
}

var mails = _createMails(10)

window.theMails = mails

function createMail(subject = 'Wassap?', body = 'Pick up!', name = 'StavIdan') {
    const mail = {
        name,
        id: utils.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: Date.now()
    }
    return mail
}

function _createMails(num) {
    const _mails = []
    for (let i = 0; i < num; i++) {
        _mails.push(createMail())
    }
    return _mails
}

function addMail({to, subject, body}) {
    const newMail = createMail(subject, body)
    mails.unshift(newMail)
    
}

function query() {
    return Promise.resolve(mails)
}

function getFormatTime(unFormatTime) {
    const currTime = new Date(Date.now())
    const sentTime = new Date(unFormatTime)
    const [currHour, sentHour] = [currTime.getHours(), sentTime.getHours()]
    if (currHour >= sentHour) {
        return `${sentHour}:${sentTime.getMinutes()}`
    } else {
        const month = sentTime.toLocaleString('default', { month: 'short' });
        const day = sentTime.getDate()
        return `${month} ${day}`
        // console.log("getFormatTime -> day", day)
        // console.log(month);
    }

}