const nwenotesTitle = document.querySelector('.nwenotes-title');
const nwenoteCheckButton = document.querySelector('.nwenotes-check');
const nwenotesMistake = document.querySelector('.nwenotes-mistake');
const nwenotesText = document.querySelector('.nwenotes-text');
const nwenotesAdd = document.querySelector('.nwenotes-add');

const notesTitle = document.querySelector('.notes-title');
const notesFindButton = document.querySelector('.notes-find');
const notesMistake = document.querySelector('.notes-mistake');
const noteRemoveButton = document.querySelector('.notes-remove');
const noteShowButton = document.querySelector('.notes-show');
const noteText = document.querySelector('.notes-text');
const noteHide = document.querySelector('.notes-hide');


const listDisplayButton = document.querySelector('.list-notes_show');
const listNotes = document.querySelector('.list-notes');
const listHideButton = document.querySelector('.list-notes_hide');


// block for add notes
const nodes = [{ title: 'Заголовок1', body: 'Содержание заметки' }];

function createListNotes(title, body) {
  return {
    title,
    body,
  };
}

function addNewTitle(array) {
  const titleValue = nwenotesTitle.value;

  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    if (titleValue === item.title || titleValue === '') {
      nwenotesMistake.style.display = 'inline-block';
      nwenotesText.style.display = 'none';
      nwenotesAdd.style.display = 'none';
      break;
    } else {
      nwenotesText.style.display = 'inline-block';
      nwenotesAdd.style.display = 'inline-block';
      nwenotesMistake.style.display = 'none';
    }
  }
}

nwenoteCheckButton.addEventListener('click', () => {
  addNewTitle(nodes);
});

function createNewNotes(array) {
  const titleValue = nwenotesTitle.value;
  const bodyValue = nwenotesText.value;
  array.push(createListNotes(titleValue, bodyValue));
}

nwenotesAdd.addEventListener('click', () => {
  createNewNotes(nodes);
  nwenotesText.style.display = 'none';
  nwenotesAdd.style.display = 'none';
  nwenotesTitle.value = '';
  nwenotesText.value = '';
});


// block for find note
function findNote(array) {
  const noteTitleValue = notesTitle.value;

  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    if (item.title === noteTitleValue) {
      noteRemoveButton.style.display = 'inline-block';
      noteShowButton.style.display = 'inline-block';
      notesMistake.style.display = 'none';
      noteText.style.display = 'none';
      noteHide.style.display = 'none';
      break;
    } else {
      notesMistake.style.display = 'inline-block';
      noteRemoveButton.style.display = 'none';
      noteShowButton.style.display = 'none';
      noteText.style.display = 'none';
      noteHide.style.display = 'none';
    }
  }
}

notesFindButton.addEventListener('click', () => {
  findNote(nodes);
});

function removeNote(array) {
  const notesTitleValue = notesTitle.value;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    if (item.title === notesTitleValue) {
      array.splice(array.indexOf(item), 1);
    }
  }
}

noteRemoveButton.addEventListener('click', () => {
  removeNote(nodes);
  notesTitle.value = '';
  noteRemoveButton.style.display = 'none';
  noteShowButton.style.display = 'none';
});

function showNoteText(array) {
  const notesTitleValue = notesTitle.value;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    if (item.title === notesTitleValue) {
      noteText.innerHTML = item.body;
    }
  }
}

noteShowButton.addEventListener('click', () => {
  showNoteText(nodes);
  noteRemoveButton.style.display = 'none';
  noteShowButton.style.display = 'none';
  noteText.style.display = 'block';
  noteHide.style.display = 'block';
});

noteHide.addEventListener('click', () => {
  noteText.style.display = 'none';
  noteHide.style.display = 'none';
});


// block for show all titles notes
function showAllTitles(array, div) {
  const divBlock = div;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    // eslint-disable-next-line no-shadow
    const div = document.createElement('div');
    div.innerHTML = item.title;
    divBlock.append(div);
  }
}

function showListNotes() {
  showAllTitles(nodes, listNotes);
  listNotes.style.display = 'block';
  listHideButton.style.display = 'inline-block';
  listDisplayButton.removeEventListener('click', showListNotes);
}
listDisplayButton.addEventListener('click', showListNotes);

function hideListNotes() {
  listNotes.style.display = 'none';
  listHideButton.style.display = 'none';
  listNotes.innerHTML = '';
  listDisplayButton.addEventListener('click', showListNotes);
}
listHideButton.addEventListener('click', hideListNotes);
