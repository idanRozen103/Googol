import { utils } from '../mail-services/mailUtils.js'

export const mailService = {
    query,
    getFormatTime,
    addMail,
    deleteMail,
    markRead,
    starMail,
    getById
}

var mails = _createMails(10)

window.theMails = mails

function createMail(subject = 'Wassap?', body = 'Pick up!', name = 'stavIdan') {
    const mail = {
        name,
        id: utils.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: Date.now(),
        isStarred: false
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


function getById(mailId) {
    const mail = mails.find(mail => mail.id === mailId)
  
    return Promise.resolve(mail)
}

function addMail({ to, subject, body }) {
    const newMail = createMail(subject, body)
    mails.unshift(newMail)
}

function deleteMail(mailToDelete) {
    mails = mails.filter((mail) => mail.id !== mailToDelete.id)
}

function markRead(mailToMark) {
    return Promise.resolve(mailToMark.isRead = !mailToMark.isRead)
}

function starMail(mail) {
    return Promise.resolve(mail.isStarred = !mail.isStarred)
}

function query() {
    return Promise.resolve(mails)
}

function getFormatTime(unFormatTime) {
    const currTime = new Date(Date.now())
    const sentTime = new Date(unFormatTime)
    const [currHour, sentHour] = [currTime.getHours(), sentTime.getHours()]
    if (currHour >= sentHour) {
        return `${get2DigTime(sentHour)}:${get2DigTime(sentTime.getMinutes())}`
    } else {
        const month = sentTime.toLocaleString('default', { month: 'short' });
        const day = sentTime.getDate()
        return `${month} ${day}`
        // console.log(month);
    }

}

function get2DigTime(num) {
    if ((num + '').length === 1) return '0' + num
    return num
}

