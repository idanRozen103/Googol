import { utils } from '../mail-services/mailUtils.js'
import {storageService} from '../../services/StorageService.js'

const IN_MAIL_KEY ="IN_MAIL"
const SENT_MAIL_KEY ="SENT_MAIL"

export const mailService = {
    query,
    getFormatTime,
    addMail,
    deleteMail,
    markRead,
    starMail,
    getById,
    markUnRead
}

var inMails = _getInMails(10)
var sentMails = _getSentMails()

window.theMails = inMails

function createMail(subject = 'Wassap?', body = 'Pick up!', name = 'stavIdan') {
    const mail = {
        name,
        id: utils.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: Date.now(),
        isStarred: false,
        isSent: false,
        color: getRandomColor()
    }
    return mail
}

function query() {
    return Promise.resolve({inMails, sentMails})
}


function _getInMails(num) {
    var _inMails = storageService.load(IN_MAIL_KEY)
    if (!_inMails || !_inMails.length) {
        _inMails = []
        for (let i = 0; i < num; i++) {
            _inMails.push(createMail())
        }
        _inMails.push(createMail('Get back to your projects.', ' Hello stav,  Your free trial expired a week ago, and we already miss you. 💔  Your projects, designs, and share links have been automatically locked. The good news is you can still get them back.  Purchase a subscription within 7 days to unlock your projects.', 'Lubo from Avocode'))
        storageService.save(IN_MAIL_KEY, _inMails)
    }
    return _inMails
}

function _getSentMails() {
    var _sentMails = storageService.load(SENT_MAIL_KEY)
    if (!_sentMails) {
        _sentMails = [createMail('Video kills', 'did video killed a radio star?', 'ooo-wa-ooo')]
    } 

    storageService.save(SENT_MAIL_KEY, _sentMails)

    return _sentMails
}


function getById(mailId) {
    
    var mail = inMails.find(mail => mail.id === mailId)
    if (!mail) {
        mail = sentMails.find(mail => mail.id === mailId)
    }
  
    return Promise.resolve(mail)
}

function addMail({ to, subject, body }) {
    const newMail = createMail(subject, body)
    newMail.isSent = true
    inMails.unshift(newMail)
    sentMails.unshift(newMail)
    storageService.save(IN_MAIL_KEY, inMails)
    storageService.save(SENT_MAIL_KEY, sentMails)
}

function deleteMail(mailToDelete) {
    inMails = inMails.filter((mail) => mail.id !== mailToDelete.id)
    sentMails = sentMails.filter((mail) => mail.id !== mailToDelete.id)
    storageService.save(IN_MAIL_KEY, inMails)
    storageService.save(SENT_MAIL_KEY, sentMails)

}

function markRead(mailToMark) {
    mailToMark.isRead = !mailToMark.isRead
    storageService.save(IN_MAIL_KEY, inMails)
    storageService.save(SENT_MAIL_KEY, sentMails)

    return Promise.resolve(true)
    
}

function markUnRead(mailToMark) {
    mailToMark.isRead = true
    storageService.save(IN_MAIL_KEY, inMails)
    storageService.save(SENT_MAIL_KEY, sentMails)

    return Promise.resolve(true)
    
}


function starMail(mail) {
    mail.isStarred = !mail.isStarred
    storageService.save(IN_MAIL_KEY, inMails)
    storageService.save(SENT_MAIL_KEY, sentMails)

    return Promise.resolve(true)
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
    }

}

function get2DigTime(num) {
    if ((num + '').length === 1) return '0' + num
    return num
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


