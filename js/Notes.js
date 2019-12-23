
// eslint-disable-next-line func-names
const Notes = (function () {
  const NOTES = 'notes';

  const initNotes = () => {
    if (localStorage.getItem(NOTES)) {
      return JSON.parse(localStorage.getItem(NOTES));
    }
    return [];
  };

  let notes = initNotes();

  const saveNote = (newnNtes) => {
    notes = [...newnNtes];
    localStorage.setItem(NOTES, JSON.stringify(notes));
  };

  const addNoteContent = (title, body) => {
    const filterNote = notes.filter((note) => note.title === title);

    if (filterNote.length === 0 && title.length > 0 && title !== ' ') {
      notes.push({
        title,
        body,
      });
      saveNote(notes);
      return {
        done: true,
      };
    }

    return {
      done: false,
      error: 'Note is exist Notes',
    };
  };

  const showNote = (title) => {
    const textNote = notes.find((note) => note.title === title);

    if (textNote) {
      return {
        done: true,
        text: textNote.body,
      };
    }
    return {
      done: false,
      error: 'Note doesn\'t exist in Notes',
    };
  };

  const removeNote = (title) => {
    const newNotes = notes.filter((note) => note.title !== title);

    if (notes.length !== newNotes.length) {
      saveNote(newNotes);
      return {
        done: true,
      };
    }
    return {
      done: false,
      error: 'Note doesn\'t exist in Notes',
    };
  };

  return {

    getNote() {
      return notes;
    },

    addNote(title, body) {
      return addNoteContent(title, body);
    },

    removeNote(title) {
      return removeNote(title);
    },

    showNote(title) {
      return showNote(title);
    },

  };
}());

const SHOW = 'show';

const UI = {
  noteTitle: document.getElementById('note-title'),
  noteBody: document.getElementById('note-body'),
  errorMessage: document.getElementById('error-message'),
  addNoteButton: document.getElementById('note-addad'),
  removeNoteButton: document.getElementById('note-remove'),
  showNoteBodySutton: document.getElementById('note-text'),
  listNotes: document.getElementById('list'),

  clearList() {
    this.listNotes.innerHTML = '';
  },

  clearValue() {
    this.noteTitle.value = '';
    this.noteBody.value = '';
  },

  renderListNotes() {
    this.clearList();
    Notes.getNote().forEach((note) => {
      const li = document.createElement('li');
      li.innerHTML = note.title;
      this.listNotes.append(li);
    });
  },

  sowBodyNote(text) {
    this.clearList();
    const li = document.createElement('li');
    li.innerHTML = text;
    this.listNotes.append(li);
  },

  handelNoteResponse(result) {
    if (result.done) {
      this.clearValue();
      this.errorMessage.classList.remove(SHOW);
      this.renderListNotes();
    } else {
      this.errorMessage.innerHTML = result.error;
      this.errorMessage.classList.add(SHOW);
    }
  },

  handelNotBodyResponse(result) {
    if (result.done) {
      this.clearValue();
      this.errorMessage.classList.remove(SHOW);
      this.sowBodyNote(result.text);
    } else {
      this.errorMessage.innerHTML = result.error;
      this.errorMessage.classList.add(SHOW);
    }
  },

};


// UI.addNoteButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   const result = Notes.addNote(UI.noteTitle.value, UI.noteBody.value);
//   UI.handelNoteResponse(result);
// });

// UI.removeNoteButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   const result = Notes.removeNote(UI.noteTitle.value);
//   UI.handelNoteResponse(result);
// });

// UI.showNoteBodySutton.addEventListener('click', (event) => {
//   event.preventDefault();

//   const result = Notes.showNote(UI.noteTitle.value);
//   UI.handelNotBodyResponse(result);
// });
