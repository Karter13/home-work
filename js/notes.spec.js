describe('notes.js -> createListNotes -> should return Obj', function () {
    it('should return Obj', function () {
        expect(createListNotes('title Notes1', 'body Notes1')).toEqual({ title: 'title Notes1', body: 'body Notes1' })
    });
});

