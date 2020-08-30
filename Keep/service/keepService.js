import { storageService } from "../../services/StorageService.js";

export const keepService = {
    query,
    getEmptyTxtNote,
    addNote: addNote,
    deleteNote,
    updateNote,
    getEmptyImgNote,
    getEmptyCheckListNote,
    getEmptyAudioNote,
    getEmptyVideoNote,
    changeNoteBGC,
    copyNote,
    pinNote,
    getNote,
    toggleTodo
}

const _notes = [
    {
        type: "NoteImg",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'From my last trip',
            url: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/p960x960/101288510_10222892272195607_2638468976245473280_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=AR8ZP-Jn5_QAX9UojTb&_nc_ht=scontent-frt3-2.xx&tp=6&oh=78eba18bbee948776e3532c75a845e0e&oe=5F6FA715'
        },
        style: {
            backgroundColor: "#8bccff",
        }
    },

    {
        type: "NoteTodos",
        id: makeId(),
        isPinned: false,
        info: {
            timeCreated: getTime(),
            title: "רשימת קניות",
            todos: [{ id: "VMozQ", isDone: false, text: "חלב" },

            { id: "MGzIg", isDone: false, text: "לחמניות" },

            { id: "8TTav", isDone: true, text: "קיסמי שיניים" },

            { id: "zYcRC", isDone: false, text: " מרכך כביסה" },

            { id: "KTH0R", isDone: true, text: " אוכל לחתולים" }]
        },
        style: {
            backgroundColor: "#fff",
        }
    },


    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'דברים שרציתי לומר',
            text: "בן לאבא מתכנת: “אבא, למה השמש עולה במזרח ושוקעת במערב?”  \nאבא: “כל עוד זה עובד, עזוב את זה”"
        },
        style: {
            backgroundColor: "#f28b82",
        }
    },

    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'Some Inspiration',
            text: "Great things never came from comfort zone!"
        },
        style: {
            backgroundColor: "#c4fd82",
        }
    },

    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'Players that are better than Messi:',
            text: "none"
        },
        style: {
            backgroundColor: "#d7aefb",
        }
    },
    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: ':מתי ישנתי לאחרונה',
            text: "new Date('July 05, 2020').getTime()"
        },
        style: {
            backgroundColor: "#fdcfe8",
        }
    },


    {
        type: "NoteVideo",
        id: makeId(),
        isPinned: false,
        info: {
            title: 'Relaxation music',
            url: "https://www.youtube.com/embed/MYJldv7ZhOA"
        },
        style: {
            backgroundColor: "#ffee58fa",
        }
    },


    {
        type: "NoteVideo",
        id: makeId(),
        isPinned: false,
        info: {
            title: 'משפחת שווץ- מבצר כריות',
            url: "https://www.youtube.com/embed/qeF3Sx_IGvE"
        },
        style: {
            backgroundColor: "#ffc107",
        }
    },

    {
        type: "NoteAudio",
        isPinned: false,
        id: makeId(),
        info: {
            url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
            title: ''
        },
        style: {
            backgroundColor: "#f28b82"
        }
    },
    {
        type: "NoteImg",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'need to find in my placekeeper:',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/118590327_10223765497465693_8092704684387184876_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=-A7xQ6jx3N4AX-ncQpz&_nc_ht=scontent-frx5-1.xx&oh=5b7641ffb7d143af6fceed99b5f207d6&oe=5F722662'
        },
        style: {
            backgroundColor: "##ffc107",
        }
    },

];

const KEEP_KEY = 'NOTES'

var notes = storageService.load(KEEP_KEY)

function query() {
    if (!notes || !notes.length) notes = _notes
    return Promise.resolve(notes)
}

function addNote(note) {
    if (note.type === 'NoteTodos') {
        note = _createTodoNote(note)
    }
    else if (note.type === 'NoteVideo') {
        note.info.url = _formatVideo(note.info.url)
    }
    notes.unshift(note)
    storageService.save(KEEP_KEY, notes)
}


function _formatVideo(url) {

    var newUrl = url.split('=')
    if (newUrl.length === 1) {
        const splitedUrl = newUrl.split('.be/')
        return 'https://www.youtube.com/embed/' + splitedUrl[1]
    }
    else if (newUrl.length > 2) {
        newUrl = ('https://www.youtube.com/embed/' + newUrl[1])
        return newUrl.split('&')[0]
    }
    else return ('https://www.youtube.com/embed/' + newUrl[1])
}


function _createTodoNote(note) {
    let newTodos = []
    note.info.todos.forEach(todo => {

        const newTodo = {
            text: todo,
            id: makeId(),
            isDone: false,
        }
        newTodos.push(newTodo)
    })
    note.info.todos = newTodos
    note.info.timeCreated = getTime()
    return note
}

function getTime() {
    return new Date().toString()
}

function deleteNote(noteId) {
    return Promise.resolve(getNoteById(noteId).then(currNoteIdx => {
        notes.splice(currNoteIdx, 1)
        storageService.save(KEEP_KEY, notes)
    }))
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


function getNoteById(noteId) {
    return Promise.resolve(notes.findIndex(note => note.id === noteId))
}

function getNote(noteId) {
    return Promise.resolve(notes.find(note => note.id === noteId))
}

function updateNote(noteId, newNote) {
    return Promise.resolve(getNoteById(noteId).then(currNoteIdx => {
        notes[currNoteIdx] = newNote;
        storageService.save(KEEP_KEY, notes)
    }))
}



function getEmptyTxtNote() {
    return {
        type: "NoteText",
        id: makeId(),
        isPinned: false,
        info: {
            title: '',
            text: ''
        },
        style: {
            backgroundColor: "#fff",
        }
    }
}

function getEmptyImgNote() {
    return {
        type: "NoteImg",
        id: makeId(),
        info: {
            url: "",
            title: ""
        },
        style: {
            backgroundColor: "#fff"
        }
    }
}

function getEmptyCheckListNote() {
    return {
        type: "NoteTodos",
        id: makeId(),
        isPinned: false,
        info: {
            title: "",
            todos: ''
        },
        style: {
            backgroundColor: "#fff"
        }
    }

}

function getEmptyVideoNote() {
    return {
        type: "NoteVideo",
        id: makeId(),
        isPinned: false,
        info: {
            title: '',
            url: ''
        },
        style: {
            backgroundColor: "#fff"
        }
    }
}

function getEmptyAudioNote() {
    return {
        type: "NoteAudio",
        id: makeId(),
        isPinned: false,
        info: {
            title: '',
            url: ''
        },
        style: {
            backgroundColor: "#fff"
        }
    }
}

function changeNoteBGC(noteId, color) {
    let currNoteIdx = getNoteIdx(noteId)
    notes[currNoteIdx].style = { backgroundColor: color }
    storageService.save(KEEP_KEY, notes)
}

function getNoteIdx(id) {
    return notes.findIndex(note => note.id === id)
}

function copyNote(note) {
    const noteToCopy = { ...note, id: makeId(), isPinned: false }
    notes.unshift(noteToCopy)
    storageService.save(KEEP_KEY, notes)
    return Promise.resolve()
}

function pinNote(noteId) {
    let currNoteIdx = getNoteIdx(noteId)
    notes[currNoteIdx].isPinned = !notes[currNoteIdx].isPinned
    storageService.save(KEEP_KEY, notes)
    return Promise.resolve()
}

function toggleTodo(noteId, todoId) {
    getNote(noteId).then(note => {
        const currTodo = note.info.todos.find(todo => {
            return todo.id === todoId
        })
        currTodo.isDone = !currTodo.isDone
        storageService.save(KEEP_KEY, notes)
    })
}