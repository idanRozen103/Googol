import { storageService } from "../../services/StorageService.js";

export const keepService = {
    query,
    getEmptyTxtNote,
    addTxtNote,
    deleteNote,
    updateNote,
    getEmptyImgNote,
    getEmptyCheckListNote,
    getEmptyAudioNote,
    getEmptyVideoNote,
    changeNoteBGC,
    copyNote,
    pinNote,
    getNote
}

const _notes = [
    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note4',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur"
        },
        style: {
            backgroundColor: "#fdcfe8",
        }
    },
    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note1',
            text: "Fullstack Me Baby!"
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
            title: 'note5',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibusLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus"
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
            title: 'note2',
            text: "Fullstack Me Baby!"
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
            title: 'note3',
            text: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#d7aefb",
        }
    },


    {
        type: "NoteImg",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note6',
            url: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/p960x960/101288510_10222892272195607_2638468976245473280_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=AR8ZP-Jn5_QAX9UojTb&_nc_ht=scontent-frt3-2.xx&tp=6&oh=78eba18bbee948776e3532c75a845e0e&oe=5F6FA715'
        },
        style: {
            backgroundColor: "#8bccff",
        }
    },

    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note6',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus"
        },
        style: {
            backgroundColor: "#ffc107",
        }
    },

    {
        type: "NoteVideo",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note6',
            url: "https://www.youtube.com/watch?v=_4kHxtiuML0"
        },
        style: {
            backgroundColor: "#ffee58fa",
        }
    },
    // {
    //     type: "NoteImg",
    //     info: {
    //         url: "http://some-img/me",
    //         title: "Me playing Mi"
    //     },
    //     style: {
    //         backgroundColor: "#00d"
    //     }
    // },
    // {
    //     type: "NoteTodos",
    //     info: {
    //         label: "How was it:",
    //         todos: [
    //             { text: "Do that", doneAt: null },
    //             { text: "Do this", doneAt: 187111111 }
    //         ]
    //     }
    // }
];

const KEEP_KEY = 'NOTES'

var notes = storageService.load(KEEP_KEY)

function query() {
    if (!notes || !notes.length) notes = _notes
    return Promise.resolve(notes)
}

function addTxtNote(note) {

    console.log(note);
    notes.unshift(note)
    storageService.save(KEEP_KEY, notes)
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
        type: "NoteAAudio",
        id: makeId(),
        isPinned: false,
        info: {
            title: '',
            file: ''
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