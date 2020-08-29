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
<<<<<<< HEAD
    pinNote

=======
    pinNote,
    getNote
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
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
<<<<<<< HEAD
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus"
=======
            url: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/p960x960/101288510_10222892272195607_2638468976245473280_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=AR8ZP-Jn5_QAX9UojTb&_nc_ht=scontent-frt3-2.xx&tp=6&oh=78eba18bbee948776e3532c75a845e0e&oe=5F6FA715'
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
        },
        style: {
            backgroundColor: "#8bccff",
        }
    },

    {
<<<<<<< HEAD
        type: "NoteImg",
=======
        type: "NoteText",
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
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
<<<<<<< HEAD
        type: "NoteImg",
=======
        type: "NoteVideo",
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note6',
<<<<<<< HEAD
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus"
=======
            url: "https://www.youtube.com/watch?v=_4kHxtiuML0"
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
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
<<<<<<< HEAD

}



function addTxtNote(note) {
    notes.unshift(note)
=======
}

function addTxtNote(note) {

    console.log(note);
    notes.unshift(note)
    storageService.save(KEEP_KEY, notes)
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
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
<<<<<<< HEAD
            backgroundColor: "#efefef",
=======
            backgroundColor: "#fff",
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
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
<<<<<<< HEAD
            backgroundColor: "#00d"
=======
            backgroundColor: "#fff"
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
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
<<<<<<< HEAD
            todos: [
                { text: "Do that", doneAt: null },
                { text: "Do this", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#00d"
=======
            todos: ''
        },
        style: {
            backgroundColor: "#fff"
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
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
<<<<<<< HEAD
            backgroundColor: "#00d"
=======
            backgroundColor: "#fff"
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
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
<<<<<<< HEAD
            backgroundColor: "#00d"
=======
            backgroundColor: "#fff"
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
        }
    }
}

function changeNoteBGC(noteId, color) {
    let currNoteIdx = getNoteIdx(noteId)
    notes[currNoteIdx].style = { backgroundColor: color }
<<<<<<< HEAD
=======
    storageService.save(KEEP_KEY, notes)
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
}

function getNoteIdx(id) {
    return notes.findIndex(note => note.id === id)
}

function copyNote(note) {
<<<<<<< HEAD
    const noteToCopy = { ...note, id: makeId() }
    notes.unshift(noteToCopy)
=======
    const noteToCopy = { ...note, id: makeId(), isPinned: false }
    notes.unshift(noteToCopy)
    storageService.save(KEEP_KEY, notes)
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
    return Promise.resolve()
}

function pinNote(noteId) {
    let currNoteIdx = getNoteIdx(noteId)
<<<<<<< HEAD
    notes[currNoteIdx].isPinned = !notes[currNoteIdx].isPinned;
=======
    notes[currNoteIdx].isPinned = !notes[currNoteIdx].isPinned
    storageService.save(KEEP_KEY, notes)
    return Promise.resolve()
>>>>>>> bc1e2451dbd087fb868f2faf9ac0fe34b793a9ac
}