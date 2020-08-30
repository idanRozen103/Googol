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

var inMails = _getInMails(3)
var sentMails = _getSentMails()

window.theMails = inMails

function createMail(subject = 'Wassap?', body = 'Pick up!', name = 'stavIdan', imgUrl='') {
    const mail = {
        name,
        id: utils.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: getRandTime(),
        isStarred: false,
        isSent: false,
        color: getRandomColor(),
        imgUrl
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

        _inMails.push(createMail('Get back to your projects.', ' Hello stav,  Your free trial expired a week ago, and we already miss you. 💔  Your projects, designs, and share links have been automatically locked. The good news is you can still get them back.  Purchase a subscription within 7 days to unlock your projects.', 'Lubo from Avocode'), createMail('Confirm your email address','Verify your e-mail to finish signing up for AvocodeThank you for choosing Avocode. Please confirm that anistu@gmail.com is your e-mail address by clicking on the button below or use this link https://avocode.com/confirm-email/MTAxODQ1OQ/5iu-6d9ee3342678f53a67c2 within 48 hours.', 'Avocode'), createMail('Stav and 39 others made changes in your shared folders', 'Here’s what happened in your shared folders last week', 'Dropbox', 'https://i.pinimg.com/originals/eb/06/e1/eb06e1bf9aa6079e319581e5c986f339.jpg'), createMail('OMG OMG OMG!', 'pizza tastes really good', 'FOODY', 'https://www.touristisrael.com/wp-content/uploads/Best-Pizza-in-Tel-Aviv.jpg'), createMail('Что важнее, сайт или реклама?','Здравствуйте.Сайт важнее чем реклама! Многие владельцы этого не замечают, тратя весь бюджет на рекламу! Но, задайтесь себе вопросом? Где купит клиент при равных условиях? Правильно! На ресурсе, который будем ему более интересен!А условия сейчас плюс, минус у всех равные. Проведем аудит Вашего сайта! Внесем на сайт все согласованные и>зменения. Сделаем аудит рекламных компаний.Работа "в одном окне". Внимание! Только 2 недели стоимость аудита сайта 5000 рублей! Важно!Если аудит уже есть, с удовольствием реализуем Ваши задумки любой сложности!С Уважением, Удальцов Сергей!' ,'Sergey', 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/90769652_10157026298342967_6028204642540716032_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=fo9iPks4AZkAX_0GOAw&_nc_ht=scontent.ftlv5-1.fna&oh=08c37f182f2819c5b2c23a41b9ffc056&oe=5F6F8226'), createMail('YOU WON!!!', 'Hey! we\'re happy to inform you that you won the best prize eveeeerrrrrr! send us your favorite child to proceed', 'Prizes', '../../assets/img/kid.jpg'), createMail('Did you know?', 'a cat named Tibbles once started bringing dead birds to a lighthouse that were discovered to be a new species, the Stephens Island wren. They went extinct shortly after and Tibbles the cat was accused of being the only single living creature to eradicate a species.', 'Tibbles The Cat', 'https://thumbs-prod.si-cdn.com/keKc9C3297XRuGL3w5-i-rtYHBk=/fit-in/1600x0/https://public-media.si-cdn.com/filer/f5/72/f5723c57-b8c0-48a1-bf7c-aaa4c2d918fd/ax50mk.jpg')) 
        _inMails.sort((mail1, mail2) => {
            return mail1.sentAt - mail2.sentAt
        })
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
    const totalTime = (currTime - sentTime)
    const [currHour, sentHour] = [currTime.getHours(), sentTime.getHours()]
    if (totalTime <= 86400000/2) {
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


function getRandTime() {
    return utils.getRandInt(Date.now()-1*24*60**2*1000, Date.now())
}