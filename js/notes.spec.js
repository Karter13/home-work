describe('notes.js -> initNotes -> return array', function () {
  it('reading data from localStorage', function () {

    localStorage.setItem('notes', '[{"title": "note1", "body": "text"}]');
    let notes = Notes.getNote();
    expect(notes).toEqual([{
      "title": "note1",
      "body": "text",
    }]);
  });
});


describe('notes.js -> addNoteContent -> added note', function () {
  it('return true - false', function () {
    let result = Notes.addNote("note1", "text");
    expect(result.done).toBeFalsy();
  });
});

describe('notes.js -> showNote -> show body note', function () {
  it('return text note', function () {
    let result = Notes.showNote("note1");
    expect(result.text).toEqual("text");
  });
  it('return true - false', function () {
    let result = Notes.showNote("note1");
    expect(result.done).toBeTrue();
  });
});

describe('notes.js -> removeNote -> remove Note', function () {
  it('return true - false', function () {
    let result = Notes.removeNote("note2");
    expect(result.done).toBeFalsy();
  });
});