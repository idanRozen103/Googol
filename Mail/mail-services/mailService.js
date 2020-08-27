import { utils } from '../mail-services/mailUtils.js'
import {storageService} from '../../services/StorageService.js'

const MAIL_KEY ="MAIL"

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

localStorage.clear()

function _createMails(num) {
    var _mails = storageService.load(MAIL_KEY)
    if (!_mails) {
        _mails = []
        for (let i = 0; i < num; i++) {
            _mails.push(createMail())
        }
        storageService.save(MAIL_KEY, _mails)
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
    storageService.save(MAIL_KEY, mails)
}

function deleteMail(mailToDelete) {
    mails = mails.filter((mail) => mail.id !== mailToDelete.id)
    storageService.save(MAIL_KEY, mails)
}

function markRead(mailToMark) {
    mailToMark.isRead = !mailToMark.isRead
    storageService.save(MAIL_KEY, mails)
    return Promise.resolve(true)
    
}

function starMail(mail) {
    mail.isStarred = !mail.isStarred
    storageService.save(MAIL_KEY, mails)
    return Promise.resolve(true)
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

