export const keepService = {
    query,
    getEmptyTxtNote,
    addTxtNote,
    deleteNote,
    updateNote,
    getEmptyImgNote,
    getEmptyCheckListNote,
    getEmptyAudioNote,
    getEmptyVideoNote

}

const notes = [
    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note4',
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur"
        }
    },
    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note1',
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note5',
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibusLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus"
        }
    },
    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note2',
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteText",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note3',
            txt: "Fullstack Me Baby!"
        }
    },


    {
        type: "NoteImg",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note6',
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus"
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
    //             { txt: "Do that", doneAt: null },
    //             { txt: "Do this", doneAt: 187111111 }
    //         ]
    //     }
    // }
];


function query() {
    return Promise.resolve(notes)

}


function getEmptyTxtNote() {
    return {
        type: "NoteText",
        id: makeId(),
        isPinned: false,
        info: {
            title: '',
            txt: ''
        },
        // style: {
        //     backgroundColor: "#fff",
        //     color: 'black'
        // }
    }
}

function addTxtNote(note) {
    notes.push(note)
}

function deleteNote(noteId) {
    return Promise.resolve(getNoteById(noteId).then(currNoteIdx => {
        notes.splice(currNoteIdx, 1)
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


function updateNote(noteId, newNote) {
    return Promise.resolve(getNoteById(noteId).then(currNoteIdx => {
        notes[currNoteIdx] = newNote;
    }))
}

function getEmptyImgNote() {
    return {
        type: "NoteImg",
        info: {
            url: "",
            title: ""
        },
        // style: {
        //     backgroundColor: "#00d"
        // }
    }
}

function getEmptyCheckListNote() {
    return {
        type: "NoteCheckList",
        id: makeId(),
        isPinned: false,
        info: {
            title: "",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
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
        }
    }
}