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
    pinNote

}

const notes = [
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
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus"
        },
        style: {
            backgroundColor: "#8bccff",
        }
    },

    {
        type: "NoteImg",
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
        type: "NoteImg",
        isPinned: false,
        id: makeId(),
        info: {
            title: 'note6',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias velit magnam quidem reprehenderit ea optio, nam, praesentium ab at ad eligendi dolore aperiam earum ducimus. Sapiente sed atque temporibus"
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


function query() {
    return Promise.resolve(notes)

}



function addTxtNote(note) {
    notes.unshift(note)
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
            backgroundColor: "#efefef",
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
            backgroundColor: "#00d"
        }
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
                { text: "Do that", doneAt: null },
                { text: "Do this", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#00d"
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
            backgroundColor: "#00d"
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
            backgroundColor: "#00d"
        }
    }
}

function changeNoteBGC(noteId, color) {
    let currNoteIdx = getNoteIdx(noteId)
    notes[currNoteIdx].style = { backgroundColor: color }
}

function getNoteIdx(id) {
    return notes.findIndex(note => note.id === id)
}

function copyNote(note) {
    const noteToCopy = { ...note, id: makeId() }
    notes.unshift(noteToCopy)
    return Promise.resolve()
}

function pinNote(noteId) {
    let currNoteIdx = getNoteIdx(noteId)
    notes[currNoteIdx].isPinned = !notes[currNoteIdx].isPinned;
}